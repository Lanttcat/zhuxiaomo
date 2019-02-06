import * as React from 'react';
import styled from 'styled-components';

interface IOwnProps {
  image: string;
  children: JSX.Element[] | JSX.Element;
}

interface IBackgroundStyle {
  src: string;
}

const BackgroundUI = styled.div<IBackgroundStyle>`
  width: 100%
  height: 100%;
  background: url(${(props: IBackgroundStyle) => props.src});
  .mark {
    width: 100%
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

class Background extends React.Component<IOwnProps> {
  public render(): React.ReactNode {
    return (
      <BackgroundUI src={this.props.image}>
        <div className={'mark'}>
          {this.props.children}
        </div>
      </BackgroundUI>
    );
  }
}

export default Background;
