import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+94-7729-40633'>+94-7729-40633</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:prsthibha@gmail.com'>prsthibha@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/prathibha97'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/prathibha-ratnayake'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/prathibzz97/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
