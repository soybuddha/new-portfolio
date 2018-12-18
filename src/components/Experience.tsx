import * as React from 'react';

import {
  Duration,
  Employer,
  Job,
  JobList,
  Position,
} from '../styled-components/Experience';
import { 
  BodyText,
  Section, 
  SectionSpacer,
  SectionTitle,
} from '../styled-components/Global';

export function Experience() {
  interface IntExperience {
    employer: string,
    startDate: string,
    endDate: string,
    position: string,
    description: string,
  }
  const experienceList: IntExperience[] = [{
    employer: 'IQVIA',
    startDate: 'August 2018',
    endDate: 'Present',
    position: 'Sr. Software Engineer',
    description: 'Pitchfork you probably haven\'t heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos.Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.',
  }, {
    employer: 'Altavoz, Inc.',
    startDate: 'April 2017',
    endDate: 'August 2018',
    position: 'Sr. Software Engineer',
    description: 'Pitchfork you probably haven\'t heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos.Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.',
  }, {
    employer: 'HomeAway',
    startDate: 'January 2012',
    endDate: 'April 2017',
    position: 'UI Developer',
    description: 'Pitchfork you probably haven\'t heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos.Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.',
  }, {
    employer: 'MapMyFitness',
    startDate: 'February 2011',
    endDate: 'January 2012',
    position: 'Front End Developer',
    description: 'Pitchfork you probably haven\'t heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos.Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.',
  }, {
    employer: 'BancVue',
    startDate: 'June 2008',
    endDate: 'February 2011',
    position: 'Front End Developer',
    description: 'Pitchfork you probably haven\'t heard of them iceland, green juice raw denim succulents narwhal taxidermy jean shorts vape lyft portland gluten-free tacos.Food truck flexitarian quinoa pok pok, hell of XOXO kitsch keytar.',
  }];

  return (
    <Section theme="light">
      <SectionTitle theme="light">Experience</SectionTitle>
      <SectionSpacer theme="light" />
      <JobList>
        {experienceList.map((job: IntExperience) => {
          const conditionedKey: string = job.employer.replace(/[^a-zA-Z0-9]+/gi, '');
          return (
            <Job key={conditionedKey.toLowerCase()}>
              <Employer>{job.employer}</Employer>
              <Duration>{job.startDate} - {job.endDate}</Duration>
              <Position>{job.position}</Position>
              <BodyText>{job.description}</BodyText>
            </Job>
          );
        })}
      </JobList>
    </Section>
  );
}