import * as React from 'react';
import styled from 'styled-components';

const TagSpan = styled.span`
  border: none;
    border-radius: 4px;
    font-size: 14px;
  }
`;


interface IOwnProps {
    content: string;
}

class Tag extends React.Component<IOwnProps>{
   render(): React.ReactNode {
       return <TagSpan>{this.props.content}</TagSpan>;
   }
}

export default Tag;