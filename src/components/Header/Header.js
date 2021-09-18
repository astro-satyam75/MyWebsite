import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BsPersonSquare } from 'react-icons/bs';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { Button_project,Button_tech,Button_about } from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a  style ={{display : 'flex' , alignContent : 'center', color : 'white', marginBottom: '20' } } >
          <BsPersonSquare  size = '3rem'/> &nbsp;&nbsp; <Span> <h3>PORTFOLIO</h3></Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink><Button_project><a  style={{ color: 'white' }}>PROJECTS</a></Button_project></NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink><Button_tech><a  style={{ color: 'white' }}>TECHNOLOGY</a></Button_tech></NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
        <NavLink><Button_about><a  style={{ color: 'white' }}>ABOUT</a></Button_about></NavLink>
        </Link>
      </li>
      
    </Div2>
    <Div3><Button ><a href="./Resume.pdf" download  style={{ color: 'white' }}>DOWNLOAD RESUME</a></Button>
      
    </Div3>
  </Container>
);

export default Header;
