import * as React from 'react';

import { JavascriptLogo } from '../images/svgs/Javascript';
import { ReactLogo } from '../images/svgs/React';
import { SectionTitle } from '../styled-components/Global';
import { 
  SkillItem, 
  SkillLogo, 
  SkillsList, 
  SkillsText, 
} from '../styled-components/Skills';
import Section from './Section';

export interface IntSkillLogoProps {
  theme: 'light' | 'dark',
}

export function Skills() {
  interface IntSkill {name: string, Logo: any}
  const skillsList: IntSkill[] = [
    { name: 'Javascript', Logo: JavascriptLogo },
    { name: 'ECMAScript', Logo: ReactLogo },
    { name: 'ReactJS', Logo: ReactLogo },
    { name: 'Redux', Logo: ReactLogo },
    { name: 'Flow', Logo: ReactLogo },
    { name: 'TypeScript', Logo: ReactLogo },
    { name: 'Joi', Logo: ReactLogo },
    { name: 'HTML', Logo: ReactLogo },
    { name: 'CSS', Logo: ReactLogo },
    { name: 'Sass', Logo: ReactLogo },
    { name: 'Styled Components', Logo: ReactLogo },
    { name: 'Jest', Logo: ReactLogo },
  ];

  return (
    <Section theme="dark">
      <SectionTitle theme="dark">Skills</SectionTitle>
      <SkillsList>
        {skillsList.map((skill: IntSkill, index: number) => {
          return (
            <SkillItem key={index}>
              <SkillLogo><skill.Logo theme="dark" /></SkillLogo>
              <SkillsText>{skill.name}</SkillsText>
            </SkillItem>
          );
        })}
      </SkillsList>
    </Section>
  );
}