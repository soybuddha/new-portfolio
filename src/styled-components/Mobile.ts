import styled from 'styled-components';

import {
  HorizontalUL,
  mediaWidths
} from './Global';
import {
  darkThemeBackground,
  lightThemeBackground,
  lightThemeText,
} from './variables';

export const MobileNav = styled(HorizontalUL)`
  position: fixed;
  left: 0;
  top: 86px;
  width: 100%;
  display: none;
  z-index: 1;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0;
  background-color: ${lightThemeBackground};
  text-transform: uppercase;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

  a {
    color: ${lightThemeText};
    text-decoration: none;
  }

  ::after {
    content: '';
    height: 2px;
    background-color: ${darkThemeBackground};
    width: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (max-width: ${mediaWidths.phone.max}) {
    display: flex;
  }
`;