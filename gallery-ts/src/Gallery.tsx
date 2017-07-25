import * as React from 'react';
import { ImageType } from './types';
import ExtendedCarousel from './ExtendedCarousel';

interface IProps {
  images: Array<ImageType>;
}

interface IAppState {
  isOpen: boolean;
  activeItemIdx: number;
}

export default class Gallery extends React.Component<IProps, IAppState> {
  state = { isOpen: false, activeItemIdx: 0 };

  toggleCarousel = (idx?: number) => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
      activeItemIdx: idx || 0
    });
  };

  render() {
    const { isOpen, activeItemIdx } = this.state;
    return (
      <div className="App">
        {this.props.images.map((item, index) => {
          return (
            <img
              onClick={e => {
                e.stopPropagation();
                this.toggleCarousel(index);
              }}
              key={item.id}
              src="http://lorempixel.com/400/200"
              alt=""
            />
          );
        })}

        {isOpen &&
          <ExtendedCarousel activeItemIdx={activeItemIdx || 0} escHandler={this.toggleCarousel}>
            {this.props.images}
          </ExtendedCarousel>}
      </div>
    );
  }
}
