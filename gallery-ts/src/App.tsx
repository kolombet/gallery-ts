import * as React from 'react';
import './App.css';
import Gallery from './Gallery';
import { ImageType } from './types';

class App extends React.Component<{}, {}> {
  render() {
    const images: Array<ImageType> = [
      {
        image: 'http://lorempixel.com/400/200/nature',
        id: '0',
        width: 100,
        height: 100
      },
      {
        image: 'http://lorempixel.com/400/200/nature',
        id: '1',
        width: 100,
        height: 100
      },
      {
        image: 'http://lorempixel.com/400/200/nature',
        id: '2',
        width: 100,
        height: 100
      }
    ];
    return <Gallery images={images} />;
  }
}

export default App;
