import * as React from 'react';
import styled from 'styled-components';
import Section from './components/Section';

export function Portfolio() {
  const Wrapper = styled.div`
    height: 100%;
    min-height: 100%;
    background-color: #1f4552;
    font-family: 'Lato', sans-serif;
  `;

  return (
    <Wrapper>
      <Section theme="dark">Jeremiah Brown - Front End Engineer</Section>
      <Section theme="light">About</Section>
      <Section theme="dark">Skills</Section>
      <Section theme="light">Experience</Section>
      <Section theme="dark">Contact</Section>
    </Wrapper>
  );
}
