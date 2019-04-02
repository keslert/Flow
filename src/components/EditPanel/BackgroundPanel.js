import React, { useContext, useCallback } from 'react';
import { Flex, Box } from 'rebass';
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import Field from './Field';
import ImageCrop from '../ImageCrop';
import { DispatchContext } from '../../containers/Queue';
import mapKeys from 'lodash/mapKeys';
import Button from '../Button';
import chroma from 'chroma-js';
import { resolveColor } from '../../core/utils/render-utils';
import { getOptimalBackgroundColor } from '../../core/generator/color';

function BackgroundPanel({surface, background={}, path, type}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => path + k),
  }), []);

  const img = background.img;
  const paletteColors = Object.values(surface._root.palette);
  const bgType = img ? 'image' : background.color ? background.color.type : 'none';
  const bgOptions = surface.kind === 'template' 
    ? ['color', 'gradient', 'image']
    : ['none', 'color', 'gradient', 'image'];
    
  return (
    <Box>
      {!type && 
        <Field 
          label="Background"
          children={
            <Select
              bg="dark"
              color="white"
              value={BackgroundTypeToText[bgType]}
              options={bgOptions}
              onChange={e => {
                const type = e.target.value;
                const o = {};

                if(background.img && type !== 'image') {
                  o.prevImg = img;
                  o.img = null;
                }

                if(type === 'none') {
                  o._color = background.color;
                  o.color = null;
                }
                else if(type === 'color') {
                  o.color = getSolid(surface, background, surface._root.palette);
                }
                else if(type === 'gradient') {
                  o.color = getGradient(surface, background, surface._root.palette);
                }
                else if(type === 'image') {
                  o.img = img || background.prevImg || placeholderImg;
                  o._color = background.color;
                  o.color = null;
                }
                update(o);
              }}
            />
          }
        />
      }
      

      {img &&
        <React.Fragment>
          <Box mt={-3} mb={3}>
            <ImageCrop
              key={surface._root.id}
              img={img}
              size={surface._computed.bb}
              onComplete={(crop, pixelCrop) => {
                const zoom = Math.round(img.zoom * img._computed.cropW / crop.width * 100) / 100;
                const x = Math.round(crop.x / (100 - crop.width) * 100) / 100 || 0;
                const y = Math.round(crop.y / (100 - crop.height) * 100) / 100 || 0;
                if(x !== img.x || y !== img.y || zoom !== img.zoom) {
                  update({'img.x': x, 'img.y': y, 'img.zoom': zoom})
                }
              }}
            />
            <Flex mt={2} justifyContent="space-between">
              <Button
                variant="light"
                fontSize={0}
                px={1}
                py={2}
                children="Search Images"
              />
              <Button
                variant="subtle"
                fontSize={0}
                px={1}
                py={2}
                children="Upload"
              />
            </Flex>
          </Box>
          
          <Field 
            label="Overlay"
            children={
              <Select
                bg="dark"
                color="white"
                value={BackgroundTypeToText[background.color ? background.color.type : 'none']}
                options={['none', 'color', 'gradient']}
                onChange={e => {
                  const type = e.target.value;
                  const o = {};

                  if(type === 'none') {
                    o._color = background.color;
                    o.color = null;
                  }
                  else if(type === 'color') {
                    o.color = getSolid(surface, background, surface._root.palette, .5);
                  }
                  else if(type === 'gradient') {
                    o.color = getGradient(surface, background, surface._root.palette, .5);
                  }
                  update(o);
                }}
              />
            }
          />
        </React.Fragment>
      }

      {(background.color && background.color.type === 'solid') &&
        <Field 
          label="Color"
          children={
            <ColorPicker
              color={resolveColor(background.color)}
              palette={paletteColors}
              onClear={() => update({'color': null})}
              onChangeComplete={color => update({
                'color.type': 'solid',
                'color.color': color.hex,
                'color.alpha': color.rgb.a,
              })}
            />
          }
        />
      }

      {(background.color && background.color.type === 'linear') &&
        <React.Fragment>
          <Field 
            label="Color #1"
            children={
              <ColorPicker
                color={resolveColor(background.color.color)}
                palette={paletteColors}
                onChangeComplete={color => update({
                  'color.color.type': 'solid',
                  'color.color.color': color.hex,
                  'color.color.alpha': color.rgb.a,
                })}
              />
            }
          />

          <Field 
            label="Color #2"
            children={
              <ColorPicker
                color={resolveColor(background.color.colorB)}
                palette={paletteColors}
                onChangeComplete={color => update({
                  'color.colorB.type': 'solid',
                  'color.colorB.color': color.hex,
                  'color.colorB.alpha': color.rgb.a,
                })}
              />
            }
          />

          <Field 
            label="Angle"
            onExploreClick={() => null}
            children={
              <Slider
                name="mb"
                bg="dark"
                color="white"
                value={background.color.deg}
                step={15}
                min={0}
                max={360}
                showValue={true}
                onChange={e => update({'color.deg': e.target.value})}
              />
            }
          />

        </React.Fragment>
      }
    </Box>
  )
}

export default BackgroundPanel;


const placeholderImg = { 
  src: '/placeholder.png', 
  meta: {h: 500, w: 500},
  zoom: 1,
  x: 0.5,
  y: 0.5,
  colors: [],
}

function getSolid(surface, bg, palette, defaultAlpha=1) {
  const type = 'solid';
  const c = bg.color || bg._color;

  if(!c) {
    const optimalColor = getOptimalBackgroundColor(surface, palette);
    return {...optimalColor, alpha: defaultAlpha}
  }
  else if(c.type === 'solid') {
    const alpha = !(c.alpha < 1) ? defaultAlpha : c.alpha
    return { type, alpha, color: c.color }
  }
  else if(c.type === 'linear') {
    const alpha = !(c.color.alpha < 1) ? defaultAlpha : c.color.alpha
    
    return { type, alpha, color: c.color.color }
  }
}

function getGradient(surface, bg, palette, defaultAlpha=1) {
  const c = bg.color || bg._color;

  if(!c) {
    const optimalColor = getOptimalBackgroundColor(surface, palette);

    return {
      type: 'linear',
      color: {...optimalColor, alpha: defaultAlpha},
      colorB: {...optimalColor, alpha: defaultAlpha, color: chroma(optimalColor.color).darken(1).hex()},
      deg: 45,
    }
  }
  else if(c.type === 'solid') {
    const alpha = !(c.alpha < 1) ? defaultAlpha : c.alpha

    return {
      type: 'linear',
      color: {type: 'solid', alpha, color: c.color},
      colorB: {type: 'solid', alpha, color: chroma(c.color).darken(1).hex()},
      deg: 45,
    }
  }
  else if(c.type === 'linear') {
    const alpha = !(c.color.alpha < 1) ? defaultAlpha : c.color.alpha
    const alphaB = !(c.colorB.alpha < 1) ? defaultAlpha : c.colorB.alpha

    return {
      type: 'linear',
      color: {...c.color, alpha},
      colorB: {...c.colorB, alphaB},
    }
  }
}

const BackgroundTypeToText = {
  none: 'none',
  solid: 'color',
  linear: 'gradient',
  image: 'image',
}