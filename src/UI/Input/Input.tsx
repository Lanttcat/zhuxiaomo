import * as React from 'react';
import styled from 'styled-components';

interface IProp {
  type: string; // enum
  size: string;
  icon: string;
}
interface IInputUIStyle {
  size: string;
}
const InputUI = styled.div<IInputUIStyle>`
  border: none;
  input {
    padding: 6px 10px;
    width: ${(props: any) => props.size ? props.size : '300px'};
    border: 1px solid rgb(200, 200, 200);
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
`;

class Input extends React.Component<IProp> {
  public render(): React.ReactNode {
    const { type, size } = this.props;
    return (
      <InputUI size={size}>
        <input type={type}  />
      </InputUI>
    );
  }
}

export default Input;
