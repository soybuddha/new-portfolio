import * as React from 'react';
import styled from 'styled-components';

interface IntSectionProps {
  theme: 'light'|'dark',
  children: any,
}

const Section: React.SFC<IntSectionProps> = (props) => {
  const StyledSection = styled.section`
    background-color: ${p => p.theme === 'light' ? '#efefef' : '#1f4552'}
  `;

  return (
    <StyledSection theme={props.theme}>{props.children}</StyledSection>
  );
}

export default Section;