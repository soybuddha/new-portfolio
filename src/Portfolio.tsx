import * as React from 'react';
import styled from 'styled-components';

import Section from './components/Section';
import profileImage from './images/about-me-photo.jpg';
import titleImage from './images/castle-hill.jpg';

import { NetworkingLinks } from './components/SectionComponents';
import { Skills } from './components/Skills';
import { AboutMeBodyText } from './styled-components/AboutMe';
import { SectionSpacer, SectionSubTitle, SectionTitle } from './styled-components/Global';

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
      <Section 
        theme="dark"
        background={titleImage}
      >
        <SectionTitle theme="dark">Jeremiah Brown</SectionTitle>
        <SectionSpacer theme="dark" />
        <SectionSubTitle>
          Front-End Engineer<br />
          Based in Austin, Texas
        </SectionSubTitle>
        <NetworkingLinks />
      </Section>
      <Section theme="light">
        <AboutMeContent>
          <AboutMeText>
            <SectionTitle theme="light">About</SectionTitle>
            <SectionSpacer theme="light" />
            <AboutMeBodyText>Pitchfork you probably haven't heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos. Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.</AboutMeBodyText>
          </AboutMeText>
          <AboutMeImage><img src={profileImage} /></AboutMeImage>
        </AboutMeContent>
      </Section>
      <Skills />
      <Section theme="light">
        <SectionTitle theme="light">Experience</SectionTitle>
        <SectionSpacer theme="light" />
      </Section>
      <Section theme="dark">
        <SectionTitle theme="dark">Contact</SectionTitle>
        <SectionSpacer theme="dark" />
      </Section>
    </Wrapper>
  );
}
