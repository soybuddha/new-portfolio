import * as React from 'react';
import styled from 'styled-components';

interface IntSectionProps {
  theme: 'light'|'dark',
  background?: string,
  children: any,
}

interface IntStyledSectionProps {
  theme: 'light' | 'dark',
  background: void | string,
}

const Section: React.SFC<IntSectionProps> = (props) => {

  const StyledSection = styled.section`
    background-color: ${(p: IntStyledSectionProps) => p.theme === 'light' ? '#efefef' : '#1f4552'};
    background-image: ${p => p.background ? `url('../${p.background}')` : 'none'};
    background-size: 100%;
    color: ${p => p.theme === 'light' ? '#333333' : '#ffffff'};
    padding: 200px 130px;
  `;

  return (
    <StyledSection theme={props.theme} background={props.background}>{props.children}</StyledSection>
  );
}

export default Section;