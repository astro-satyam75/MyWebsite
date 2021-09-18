import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import FileSaver from 'file-saver';
import { anchor } from '../Header/HeaderStyles';
const saveFile = () => {
  FileSaver.saveAs(
  process.REACT_APP_PUBLIC_URL + "/resources/Resume.pdf",
  "Resume.pdf")};
const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Satyam <br/>
        This is where you can know me professionally
      </SectionTitle>
     <br/>
      {/*<Button onClick={() =>window.location = 'https://www.stackoverflow.com'}>DOWNLOAD RESUME</Button>-*/}
    
    </LeftSection>
  </Section>
);

export default Hero;