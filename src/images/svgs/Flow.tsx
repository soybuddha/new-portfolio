import * as React from 'react';

import { IntSkillLogoProps } from '../../components/Skills';
import {
  darkThemeText,
  lightThemeText,
} from '../../styled-components/variables';

export const FlowLogo: React.SFC<IntSkillLogoProps> = (props) => {
  const strokeColor: string = props.theme === 'dark' ? darkThemeText : lightThemeText;
  return (
    <svg 
      width="100%"
      height="100%" 
      viewBox="0 0 250 250"
    >
      <path fill={strokeColor} opacity=".7" d="M224.74 109l-84.11-84.1h84.11z" />
      <path fill={strokeColor} opacity=".7" d="M81.72 0h47.68l36.44 36.43H81.72z" />
      <path fill={strokeColor} opacity=".9" d="M84.45 84.12L.34 0h101.13v84.11zm73.89 84.1l84.11 84.11h-84.11z" />
      <path fill={strokeColor} opacity=".7" d="M101.47 168.23l-84.1-84.12h84.11v84.11zm90.58-42.57L125 58.57h67.08zm7.84 118.84l-76.28-76.27h76.28z" />
      <path fill={strokeColor} opacity=".9" d="M101.47 67l-67-67h67z" />
      <path fill={strokeColor} opacity=".8" d="M123.95 168.22l84.11 84.11h-84.11z" />
      <path fill={strokeColor} opacity=".7" d="M209.08 201.8l-84-84h84z" />
      <path fill={strokeColor} opacity=".9" d="M125 58.57l83.09 83.09H125z" />
      <path fill={strokeColor} opacity=".7" d="M101.47 252L0 150.51h101.47V252z" />
    </svg>
  );
}