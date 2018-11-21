import * as React from 'react';
import styled from 'styled-components';

import { GithubLogo } from '../images/svgs/github';
import { LinkedinLogo } from '../images/svgs/linkedin';

// Spacer underneath the title of each Section
interface IntSectionSpacerProps {
  theme: 'light' | 'dark',
}

const SectionSpacer: React.SFC<IntSectionSpacerProps> = (props) => {
  const StyledSectionSpacer = styled.hr`
    width: 60px;
    height: 2px;
    margin: 0;
    border: none;
    background-color: ${p => p.theme === 'light' ? '#333333' : '#ffffff'};
  `;

  return (
    <StyledSectionSpacer {...props} />
  );
};

// Main title for each Section
interface IntSectionTitleProps {
  theme: 'light' | 'dark',
  children: any,
}

export const SectionTitle: React.SFC<IntSectionTitleProps> = (props) => {
  const StyledSectionTitle = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    font-weight: normal;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin: 0 0 40px;
  `;

  return (
    <React.Fragment>
      <StyledSectionTitle>{props.children}</StyledSectionTitle>
      <SectionSpacer theme={props.theme} />
    </React.Fragment>
  );
};

// Subtitle for each Section
interface IntSectionSubtitleProps {
  children: any,
}

export const SectionSubTitle: React.SFC<IntSectionSubtitleProps> = (props) => {
  const StyledSectionSubTitle = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    font-weight: normal;
    letter-spacing: 4.4px;
    text-transform: uppercase;
    margin: 40px 0 0;
  `;

  return (
    <StyledSectionSubTitle>{props.children}</StyledSectionSubTitle>
  );
};

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