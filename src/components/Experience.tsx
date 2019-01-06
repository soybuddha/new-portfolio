import * as React from 'react';

import {
  Duration,
  Employer,
  Job,
  JobList,
  Position,
  Technologies,
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
    description: JSX.Element,
  }

  const experienceList: IntExperience[] = [{
    employer: 'IQVIA',
    startDate: 'August 2018',
    endDate: 'Present',
    position: 'Sr. Software Engineer',
    description: (
      <p>
        <span>Altavoz was acquired by IQVIA, the largest clinical research in the world, to continue developing and expanding the product.</span>
      </p>
    ),
  }, {
    employer: 'Altavoz, Inc.',
    startDate: 'April 2017',
    endDate: 'August 2018',
    position: 'Sr. Software Engineer',
    description: (
      <p>
        <span>Created the front end experience for a platform to help clinical research organizations create clinical assessments and track the outcomes for their patients.</span>
        <Technologies>React, Redux, Sass, and Flow</Technologies>
      </p>
    ),
  }, {
    employer: 'HomeAway',
    startDate: 'January 2012',
    endDate: 'April 2017',
    position: 'UI Developer',
    description: (
      <p>
        <span>Developed and updated the onboarding process and listing management experience for users listing their residences as vacation rentals.</span>
        <Technologies>React, Redux, Backbone, and Sass</Technologies>
      </p>
    ),
  }, {
    employer: 'MapMyFitness',
    startDate: 'February 2011',
    endDate: 'January 2012',
    position: 'Front End Developer',
    description: (
      <p>
        <span>Worked on the front end experience for platinum members and helped with general front end work.</span> 
        <Technologies>Django, JQuery, and Sass</Technologies>
      </p>
    ),
  }, {
    employer: 'BancVue (currently Kasasa)',
    startDate: 'June 2008',
    endDate: 'February 2011',
    position: 'Front End Developer',
    description: (
      <p>
        <span>Worked on producing an online experience for community financial institutions all over the country. Started as a junior level engineer and progressed to being the lead engineer of a small group creating several semi-customized websites mostly.</span>
        <Technologies>JQuery and Sass</Technologies>
      </p>
    ),
  }];

  return (
    <Section id="experience" theme="light">
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