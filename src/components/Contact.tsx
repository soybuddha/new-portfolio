import * as React from 'react';

import { NetworkingLinks } from '../components/SectionComponents';
import {
  BodyText,
  ContactSection,
  SectionSpacer,
  SectionTitle,
} from '../styled-components/Global';

export interface IntContactProps {
  theme: 'light' | 'dark',
};

export function Contact() {
  return (
    <ContactSection theme="dark">
      <SectionTitle theme="dark">Contact</SectionTitle>
      <SectionSpacer theme="dark" />
      <BodyText>jeremiahgoldwin@gmail.com</BodyText>
      <NetworkingLinks />
    </ContactSection>
  );
}