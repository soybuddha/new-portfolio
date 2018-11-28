import * as React from 'react';
import styled from 'styled-components';

import { 
  darkThemeBackground, 
  darkThemeText,
  lightThemeBackground,
  lightThemeText, 
} from '../styled-components/variables';

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
    background-color: ${(p: IntStyledSectionProps) => p.theme === 'light' ? lightThemeBackground : darkThemeBackground};
    background-image: ${p => p.background ? `url('../${p.background}')` : 'none'};
    background-size: 100%;
    color: ${p => p.theme === 'light' ? lightThemeText : darkThemeText};
    padding: 130px;
  `;

  return (
    <StyledSection theme={props.theme} background={props.background}>{props.children}</StyledSection>
  );
}

export default Section;