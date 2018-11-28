import * as React from 'react';
import styled from 'styled-components';

import { GithubLogo } from '../images/svgs/Github';
import { LinkedinLogo } from '../images/svgs/Linkedin';

// Networking Links
export const NetworkingLinks = () => {
  const StyledNetworkingLinks = styled.div`
    display: flex;
    margin-top: 70px;

    a {
      margin-right: 20px;
    }
  `;

  return (
    <StyledNetworkingLinks>
      <LinkedinLogo />
      <GithubLogo />
    </StyledNetworkingLinks>
  );
}