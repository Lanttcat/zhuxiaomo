import * as React from 'react';
import styled from 'styled-components';

const InputUI = styled.div`
  border: none;
  input {
    padding: 6px 10px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
`;

const Button = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

interface IProp {
  type: string; // enum
}

class Input extends React.Component<IProp> {
  public render(): React.ReactNode {
    const { type } = this.props;
    return (
      <InputUI>
        <input type={type} />
      </InputUI>
    );
  }
}

export default Input;
