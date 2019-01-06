import styled from 'styled-components';

import { 
  BodyText, 
  LI, 
  mediaWidths,
  UL, 
} from './Global';

export const JobList = styled(UL)`
  width: 60%;

  @media (max-width: ${mediaWidths.phone.max}) {
    width: 100%;
  }
`;

export const Job = styled(LI)`
  border-bottom: 1px solid #cccccc;
  padding-bottom: 60px;
  margin-bottom: 60px;

  :last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: ${mediaWidths.phone.max}) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const Employer = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 7px;


  @media (max-width: ${mediaWidths.phone.max}) {
    font-size: 18px;
    margin: 0;
  }
`;

export const Duration = styled.span`
  font-size: 14px;
  color: #666666;
`;

export const Position = styled(BodyText)`
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: ${mediaWidths.phone.max}) {
    margin-top: 15px;
  }
`;

export const Technologies = styled.span`
  font-style: italic;
`;