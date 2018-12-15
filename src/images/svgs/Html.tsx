import * as React from 'react';

import { IntSkillLogoProps } from '../../components/Skills';
import {
  darkThemeBackground,
  darkThemeText,
  lightThemeBackground,
  lightThemeText,
} from '../../styled-components/variables';

export const HtmlLogo: React.SFC<IntSkillLogoProps> = (props) => {
  const backgroundColor: string = props.theme === 'dark' ? darkThemeText : lightThemeText;
  const strokeColor: string = props.theme === 'dark' ? darkThemeBackground : lightThemeBackground
  return (

    <svg 
      width="100%"
      height="100%" 
      viewBox="0 0 512 512"
    >
      <path fill={backgroundColor} d="M71 460L30 0h451l-41 460-185 52" />
      <path fill={strokeColor} d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm0 147h-1l-63-17-4-45h-56l7 89 116 32h1z" />
      <path fill={strokeColor} d="M255 208v57h70l-7 73-63 17v59l116-32 1-10 13-149 2-15h-16zm0-114v56h137l1-12 3-29 1-15z" />
    </svg>
  );
}