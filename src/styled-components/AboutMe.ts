import styled from 'styled-components';
import { BodyText, mediaWidths } from './Global';

export const AboutMeText = styled.div`
  width: 60%;
  @media (max-width: ${mediaWidths.phone.max}) {
    width: 100%;
  }
`;

export const AboutMeImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  overflow: hidden;

  img {
    position: absolute;
    top: -35px;
    left: -30px;
    width: 110%;

    @media (max-width: ${mediaWidths.phone.max}) {
      top: -10px;
      left: -15px;
    }
  }

  @media (max-width: ${mediaWidths.phone.max}) {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    z-index: 0;
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${mediaWidths.phone.max}) {
    flex-direction: column;
    align-items: center;

    ${AboutMeText} {
      order: 2;
    }
  }
`;

export const AboutMeBodyText = styled(BodyText)`
  margin: 40px 0 0 0;

  @media (max-width: ${mediaWidths.phone.max}) {
    margin: 20px 0 0;
  }
`;