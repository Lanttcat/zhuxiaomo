import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

// images: url? width=300&height=500;
interface IOwnProps {
  size: number;
  column: number;
  images: string[];
}

interface IAlbumStyle {
  columnWidth: number;
  size: number;
}

const AlbumWrapper = styled.div<IAlbumStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IAlbumStyle) => `${props.size}px`}
  .column {
    width: ${(props: IAlbumStyle) => `${props.columnWidth}px`}
  }
`;

class Album extends React.Component<IOwnProps> {
  public render(): React.ReactNode {
    const { images, column, size } = this.props;
    const imagesChunk = _.chunk(images, _.ceil(images.length / column));
    return (
      <AlbumWrapper columnWidth={_.floor(size / column)} size={size}>
        {
          _.map(imagesChunk, (imageList, index) => {
            return (
              <div key={index} className="column">
                {
                  _.map(imageList, (image, i) => (
                    <div className="item" key={i}>
                      <img src={image} alt=""/>
                    </div>
                  ))
                }
              </div>
            );
          })
        }
      </AlbumWrapper>
    );
  }
}

export default Album;
