import React from 'react';
import { DiCode, DiCompass, DiCssdeck, DiFirebase, DiRasberryPi, DiReact, DiSafari, DiSpark, DiSwift, DiTerminal, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard2 } from '../Projects/ProjectsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section  id = "tech">
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on a wide range of technolgies in software as well as hardware.
    </SectionText>
    <List><BlogCard2>
      <ListItem><br/>
        <DiRasberryPi  color = 'teal' size = '5rem'/>
        <ListContainer>
          <ListTitle>Embedded Systems</ListTitle>
          <ListParagraph>
            Experience with Embedded C, various MCUs like Arduino, ESp32, and ESp8266 and various electronic sensors.
          </ListParagraph>
        </ListContainer>
      </ListItem></BlogCard2>
      <BlogCard2>
      <ListItem>
      <br/>
        <DiCssdeck  color = 'blue' size = '5rem'/>
        <ListContainer>
          <ListTitle>Communication Systems</ListTitle>
          <ListParagraph>
            Experience with Internet of Things, Communication protocols such as LoRaWAN and Antenna design.
          </ListParagraph>
        </ListContainer>
      </ListItem></BlogCard2><br/>
      <BlogCard2>
      <ListItem>
      <br/>
        <DiCode  color = '#52eb34' size = '5rem'/>
        <ListContainer>
          <ListTitle>Web Dev</ListTitle>
          <ListParagraph>
            Experience with HTML5,CSS and ReactJs.

            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </BlogCard2>
      <BlogCard2>
      <ListItem>
      <br/>
        <DiTerminal  color = 'crimson' size = '5rem'/>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with Python, R and beginner level TensorFlow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </BlogCard2>
    </List>
  </Section>
);

export default Technologies;
