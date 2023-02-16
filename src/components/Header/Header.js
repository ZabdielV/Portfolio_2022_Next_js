import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiWolfHowl } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white",justifyContent:'space-around',marginLeft:'10px' }}>
          <GiWolfHowl size="5rem" /> <span style={{marginLeft:'10px'}}>Zabdiel</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contac">
          <NavLink>Contact</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ZabdielV" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/zabdielv/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
{/*         <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
        </SocialIcons> */}
      </Div3>
    </Container>
);

export default Header;
