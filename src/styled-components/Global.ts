import styled from 'styled-components';

import titleImage from '../images/castle-hill.jpg';
import mapImage from '../images/map.png';

import { 
  bodyTextSize, 
  darkThemeBackground,
  darkThemeText,
  lightThemeBackground, 
  lightThemeText, 
  mainFontFamily,
  titleFontFamily,
} from './variables';

export const Section = styled.section`
  background-color: ${p => p.theme === 'light' ? lightThemeBackground : darkThemeBackground};
  color: ${p => p.theme === 'light' ? lightThemeText : darkThemeText};
  padding: 80px 130px;
`;

export const TitleSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${`url('../${titleImage}')`};
  background-size: 100%;
  background-position: bottom center;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 688px; 
`;

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  background-image: ${`url('../${mapImage}')`};
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 683px;
`;

export const SectionTitle = styled.h1`
  font-family: ${titleFontFamily}, sans-serif;
  font-size: 48px;
  font-weight: normal;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 0;
`;

export const SectionSubTitle = styled.h2`
  font-family: ${titleFontFamily}, sans-serif;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 4.4px;
  text-transform: uppercase;
  margin: 0;
`;

export const SectionSpacer = styled.hr`
  width: 60px;
  height: 2px;
  margin: 40px 0;
  border: none;
  background-color: ${p => p.theme === 'light' ? '#333333' : '#ffffff'};
`;

export const BodyText = styled.p`
  font-family: ${mainFontFamily}, sans-serif;
  font-size: ${bodyTextSize};
  line-height: 1.89;
  margin: 0;
`;

export const SvgLink = styled.a`
  text-decoration: none;

  svg {
    width: 24px;
    height: 24px;
    fill: rgba(255, 255, 255, .45);
  }

  :hover {
    svg {
      fill: rgba(255, 255, 255, .8);
    }
  }
`;

export const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

export const HorizontalUL = styled(UL)`
  display: flex;
`;

export const LI = styled.li`
  list-style: none outside;
  margin: 0;
  padding: 0;
`;