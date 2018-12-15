import * as React from 'react';
import styled from 'styled-components';

import { CssLogo } from '../images/svgs/Css';
import { FlowLogo } from '../images/svgs/Flow';
import { HtmlLogo } from '../images/svgs/Html';
import { JavascriptLogo } from '../images/svgs/Javascript';
import { JestLogo } from '../images/svgs/Jest';
import { ReactLogo } from '../images/svgs/React';
import { ReduxLogo } from '../images/svgs/Redux';
import { SassLogo } from '../images/svgs/Sass';

import { TypeScriptLogo } from 'src/images/svgs/TypeScript';
import { SectionTitle } from '../styled-components/Global';
import { 
  SkillItem, 
  SkillLogo, 
  SkillsList, 
  SkillsText, 
} from '../styled-components/Skills';
import { 
  darkThemeBackground,
  darkThemeText,
  lightThemeBackground,
  lightThemeText, 
} from '../styled-components/variables';

import Section from './Section';


export interface IntSkillLogoProps {
  theme: 'light' | 'dark',
}

const JoiLogo: React.SFC<IntSkillLogoProps> = (props) => {
  const backgroundColor: string = props.theme === 'dark' ? darkThemeText : lightThemeText;
  const strokeColor: string = props.theme === 'dark' ? darkThemeBackground : lightThemeBackground;
  const JoiWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor};
    color: ${strokeColor};
    font-size: 12px;
    font-weight: bold;
    box-sizing: border-box;
    padding-top: 8px;
    padding-left: 10px;
  `;

  return (
    <JoiWrapper>
      joi
    </JoiWrapper>
  );
}

export function Skills() {
  interface IntSkill {name: string, Logo: any}
  const skillsList: IntSkill[] = [
    { name: 'Javascript', Logo: JavascriptLogo },
    { name: 'TypeScript', Logo: TypeScriptLogo },
    { name: 'HTML', Logo: HtmlLogo },
    { name: 'ReactJS', Logo: ReactLogo },
    { name: 'Redux', Logo: ReduxLogo },
    { name: 'Jest', Logo: JestLogo },
    { name: 'CSS', Logo: CssLogo },
    { name: 'Sass', Logo: SassLogo },
    { name: 'Styled Components', Logo: ReactLogo },
    { name: 'Flow', Logo: FlowLogo },
    { name: 'Joi', Logo: JoiLogo },
  ];

  return (
    <Section theme="dark">
      <SectionTitle theme="dark">Skills</SectionTitle>
      <SkillsList>
        {skillsList.map((skill: IntSkill, index: number) => {
          const isLastItem: boolean = index === skillsList.length - 1;
          return (
            <SkillItem key={index} className={isLastItem ? 'last-skill' : ''}>
              <SkillLogo><skill.Logo theme="dark" /></SkillLogo>
              <SkillsText>{skill.name}</SkillsText>
            </SkillItem>
          );
        })}
      </SkillsList>
    </Section>
  );
}