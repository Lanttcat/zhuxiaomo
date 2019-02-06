import * as React from 'react';
import styled from 'styled-components';

interface IProp {
  type: string; // enum
  size: string;
  icon: string;
  placeholder: string;
}
interface IInputUIStyle {
  size: string;
}
const InputUI = styled.div<IInputUIStyle>`
  border: none;
  input {
    padding: 10px 20px;
    width: ${(props: any) => props.size ? props.size : '300px'};
    // border: 1px solid rgb(200, 200, 200);
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
`;

class Input extends React.Component<IProp> {
  public render(): React.ReactNode {
    const { type, size, placeholder } = this.props;
    return (
      <InputUI size={size}>
        <input type={type} placeholder={placeholder} />
      </InputUI>
    );
  }
}

export default Input;
