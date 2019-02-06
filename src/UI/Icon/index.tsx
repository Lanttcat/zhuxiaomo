import * as React from 'react';
import styled from 'styled-components';

interface IOwnProps {
  name: string;
  size: number;
  width: number;
}

interface IIconStyle {
  name: string;
  width: number;
}

const IconUI = styled.span<IIconStyle>`
  width: ${(props: IIconStyle) => `${props.width}px`}
  height: ${(props: IIconStyle) => `${props.width}px`}
  background: url('./SVG/${(props: IIconStyle) => `${props.name}.svg`}')
  background-size:100% 100%;
  vertical-align: middle;
`;

class Icon extends React.Component<IOwnProps> {
  public render(): React.ReactNode {
    const { name, width } = this.props;
    return <IconUI name={name} width={width}/>;
  }
}

export default Icon;
