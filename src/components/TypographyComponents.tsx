import * as React from 'react';
import styled from 'styled-components';

// Standard text
interface IntBodyTextProps {
  children: string,
}

export const BodyText: React.SFC<IntBodyTextProps> = (props) => {
  const StyledBodyText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 19px;
    line-height: 1.89;
    margin: 0;
    color: #333333;
  `;

  return (
    <StyledBodyText>
      {props.children}
    </StyledBodyText>
  );
}