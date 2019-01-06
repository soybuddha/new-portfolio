import * as React from 'react';
import styled from 'styled-components';

import { GithubLogo } from '../images/svgs/Github';
import { LinkedinLogo } from '../images/svgs/Linkedin';
import { mediaWidths } from '../styled-components/Global';
export const StyledNetworkingLinks = styled.div`
  display: flex;
  margin-top: 40px;

  a {
    margin-right: 20px;
  }

  @media (max-width: ${mediaWidths.phone.max}) {
    margin-top: 10px;

    a {
      margin-right: 10px;
    }
  }
`;

// Networking Links
export const NetworkingLinks = () => {
  return (
    <StyledNetworkingLinks>
      <LinkedinLogo />
      <GithubLogo />
    </StyledNetworkingLinks>
  );
}