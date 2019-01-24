import * as React from 'react';
import styled from 'styled-components';

import { IntSkillLogoProps } from '../../components/Skills';
import { mediaWidths } from '../../styled-components/Global';
import {
  darkThemeBackground,
  lightThemeBackground,
} from '../../styled-components/variables';

export const JavascriptLogo: React.SFC<IntSkillLogoProps> = (props) => {
  const backgroundColor: string = props.theme === 'dark' ? '#ffffff' : darkThemeBackground;
  const strokeColor: string = props.theme === 'dark' ? darkThemeBackground : lightThemeBackground;

  const JavascriptWrapper = styled.div`
    background-color: ${backgroundColor};
    height: 24px;
    width: 24px;

    @media (max-width: ${mediaWidths.phone.max}) {
      height: 20px;
      width: 20px;
    }
`;

  return (
    <JavascriptWrapper>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1052 1052"
        fill={strokeColor}
      >
        <path d="M784 478c-37.8 3-69.5 16.6-93.1 40-24.3 24.1-35.9 53.5-35.9 90.8 0 55.8 22.9 94.8 74 125.7 13 7.8 30.7 16.3 61.3 29.5 41.7 17.9 57.2 26.4 67.1 37 12.2 13.1 15.6 34 7.9 50-1.5 3.1-5.4 8.3-8.9 11.8-11.8 11.9-30.4 18.2-53.5 18.2-39 0-68.1-16-91.5-50.6-3.2-4.6-6.1-8.4-6.5-8.4-.9 0-77 43.9-78.6 45.4-1 .9-.2 3 3.7 9.4 30.4 51.2 77.9 81.2 142.1 89.8 16.8 2.3 48.3 2.2 64.4 0 40.4-5.7 70.7-19.1 94.2-41.9 25-24.1 37.3-55.3 37.3-94.4 0-25-4.1-44.5-13.4-63.8-6.4-13.2-12.8-22.1-23.8-33.3-21.1-21.4-48.4-37.6-102.9-61-41.2-17.7-55-25.3-64.1-35-8.7-9.3-12.4-20.2-11.6-33.8.7-10.8 3.7-18.1 10.3-25.2 9.5-10.3 20.5-14.6 37.5-14.5 19.3 0 31.8 5 44.5 17.8 4.5 4.4 10.3 11.5 13 15.8 3.1 4.9 5.4 7.6 6.2 7.3 2.6-1.1 75.3-48.1 75.3-48.8 0-.4-3.7-6.2-8.2-13-9.6-14.4-26.9-32.4-38.8-40.3-22-14.6-45.5-22.1-76.5-24.4-15.2-1.2-17.2-1.2-31.5-.1zM472.7 659.7l-.3 176.8-2.2 8.3c-2.9 10.9-6.3 17.4-12.3 23.4-8.4 8.4-19.2 11.9-37.2 12-25.7.1-41.1-10.8-59-41.4-2.9-4.8-5.5-8.7-5.8-8.6-.4.2-18.5 11.1-40.2 24.2l-39.5 24 3 6c17.9 35.7 48.9 62.7 86.2 75.1 39.4 13.1 90 11.9 127.1-3 44.5-18 70.6-55.2 77.5-110.5.6-5.6 1-68.1 1-185.7V483h-97.9l-.4 176.7z" />
      </svg>
    </JavascriptWrapper>
  );
  }