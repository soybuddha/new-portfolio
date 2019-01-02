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
    description: 'Altavoz was acquired by IQVIA, the largest clinical research in the world, to continue developing and expanding the product.',
  }, {
    employer: 'Altavoz, Inc.',
    startDate: 'April 2017',
    endDate: 'August 2018',
    position: 'Sr. Software Engineer',
    description: 'Created the front end experience for a platform to help clinical research organizations create clinical assessments and track the outcomes for their patients. The tech stack is React, Redux, Sass, and Flow',
  }, {
    employer: 'HomeAway',
    startDate: 'January 2012',
    endDate: 'April 2017',
    position: 'UI Developer',
    description: 'Developed and updated the onboarding process and listing management experience for users listing their residences as vacation rentals. The tech stack was React, Redux, Backbone, and Sass',
  }, {
    employer: 'MapMyFitness',
    startDate: 'February 2011',
    endDate: 'January 2012',
    position: 'Front End Developer',
    description: 'Worked on the front end experience for platinum members and helped with general front end work. The tech stack was Django, JQuery, and Sass.',
  }, {
    employer: 'BancVue (currently Kasasa)',
    startDate: 'June 2008',
    endDate: 'February 2011',
    position: 'Front End Developer',
    description: 'Worked on producing an online experience for community financial institutions all over the country. Started as a junior level engineer and progressed to being the lead engineer of a small group creating several semi-customized websites mostly. The tech stack was JQuery and Sass.',
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