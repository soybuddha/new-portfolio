import styled from 'styled-components';

import { HorizontalUL, LI, mediaWidths } from './Global';
import { mainFontFamily } from './variables';


export const SkillsList = styled(HorizontalUL)`
  flex-wrap: wrap;
  width: 100%%;

  @media (max-width: ${mediaWidths.phone.max}) {
    flex-direction: column;
  }
`;

export const SkillItem = styled(LI)`
  display: flex;
  align-items: center;
  width: 33%;
  margin-bottom: 30px;

  &.last-skill {
    width: 50%;
  }

  @media (max-width: ${mediaWidths.phone.max}) {
    width: 100%;
  }
`;

export const SkillLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

export const SkillsText = styled.span`
  font-family: ${mainFontFamily}, serif;
  font-size: 24px;
  letter-spacing: 2px;
`;