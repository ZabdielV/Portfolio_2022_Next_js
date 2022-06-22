import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contac'>
        <SectionTitle main center>
        Contact
        </SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem >
          premiunn@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
       {/*    <Slogan>Innovating one project at a time</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ZabdielV">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zabdiel-valent%C3%ADn-gardu%C3%B1o-vivanco-bb6836207/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
