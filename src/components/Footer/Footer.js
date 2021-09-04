import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Contact</LinkTitle>
        <LinkItem href = 'mailto: satyam.anand75@gmail.com'><a  style={{ color: 'yellow' }}>satyam.anand75@gmail.com</a></LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
      <SocialIcons href='https://github.com/astro-satyam75?tab=repositories'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/satyam-anand83/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/astro_satyam75'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
