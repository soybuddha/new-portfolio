import * as React from 'react';
import styled from 'styled-components';

import profileImage from './images/about-me-photo.jpg';

import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { NetworkingLinks } from './components/SectionComponents';
import { Skills } from './components/Skills';
import { 
  AboutMeBodyText, 
  AboutMeContent, 
  AboutMeImage, 
  AboutMeText, 
} from './styled-components/AboutMe';
import { 
  AboutSection, 
  LI,
  SectionSpacer, 
  SectionSubTitle,
  SectionTitle,
  TitleSection,
} from './styled-components/Global';
import { MobileNav } from './styled-components/Mobile';

export function Portfolio() {
  const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    background-color: #1f4552;
    font-family: 'Lato', sans-serif;
  `;

  return (
    <Wrapper>
      <TitleSection theme="dark">
        <SectionTitle theme="dark">Jeremiah Brown</SectionTitle>
        <SectionSpacer theme="dark" />
        <SectionSubTitle>
          Front-End Engineer<br />
          Based in Austin, Texas
        </SectionSubTitle>
        <NetworkingLinks />
      </TitleSection>
      <MobileNav>
        <LI>About</LI>
        <LI>Skills</LI>
        <LI>Experience</LI>
        <LI>Contact</LI>
      </MobileNav>
      <AboutSection id="about" theme="light">
        <AboutMeContent>
          <AboutMeText>
            <SectionTitle theme="light">About</SectionTitle>
            <SectionSpacer theme="light" />
            <AboutMeBodyText>
              I've been called a lot of things: CSS Engineer, UI Engineer, UI Developer, and Front End Engineer, 
              but they all mean the same thing: I create awesome experiences on the web. 
            </AboutMeBodyText>
          </AboutMeText>
          <AboutMeImage><img src={profileImage} /></AboutMeImage>
        </AboutMeContent>
      </AboutSection>
      <Skills />
      <Experience />
      <Contact />
    </Wrapper>
  );
}
