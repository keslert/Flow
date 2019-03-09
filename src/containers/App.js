import React, { Suspense } from 'react';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';

const Fonts = React.lazy(() => import('./Fonts'));
const Editor = React.lazy(() => import('./Editor'));
const Gallery = React.lazy(() => import('./Gallery'));
const Queue = React.lazy(() => import('./Queue'));
const ImagePalette = React.lazy(() => import('./ImagePalette'));
const ImagePicker = React.lazy(() => import('./ImagePicker'))
const CalcFonts = React.lazy(() => import('./calc/CalcFonts'));
const CalcImages = React.lazy(() => import('./calc/CalcImages'));

const ContentGallery = React.lazy(() => import('./test/ContentGallery'));
// const LayoutGallery = React.lazy(() => import('./test/LayoutGallery'));


function App() {
  
  const flyerSize = { w: 480, h: 670 };
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/fonts" component={Fonts} />
        <Route path="/editor/:id" component={(props) => <Editor flyerSize={flyerSize} {...props} />} />
        <Route path="/gallery" component={(props) => <Gallery flyerSize={flyerSize} {...props} />} />
        <Route path="/app" component={props => <Queue size={flyerSize} {...props} />} />
        <Route path="/image-palette" component={ImagePalette} />
        <Route path="/unsplash" component={ImagePicker} />
        <Route path="/calc/fonts" component={CalcFonts} />
        <Route path="/calc/images" component={CalcImages} />
        <Route component={props => <ContentGallery flyerSize={flyerSize} {...props} />} />

        <Route component={() => <div>DQ</div>} />
        
      </Switch>
    </Suspense>
  )
}

export default App;
