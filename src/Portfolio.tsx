import * as React from 'react';
import styled from 'styled-components';

import profileImage from './images/about-me-photo.jpg';

import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { NetworkingLinks } from './components/SectionComponents';
import { Skills } from './components/Skills';
import { AboutMeBodyText } from './styled-components/AboutMe';
import { 
  Section, 
  SectionSpacer, 
  SectionSubTitle, 
  SectionTitle, 
  TitleSection,
} from './styled-components/Global';

export function Portfolio() {
  const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    background-color: #1f4552;
    font-family: 'Lato', sans-serif;
  `;

  const AboutMeContent = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const AboutMeText = styled.div`
    width: 60%;
  `;

  const AboutMeImage = styled.div`
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
    }
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
      <Section theme="light">
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
      </Section>
      <Skills />
      <Experience />
      <Contact />
    </Wrapper>
  );
}
