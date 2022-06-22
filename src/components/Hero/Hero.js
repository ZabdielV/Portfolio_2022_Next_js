import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {AiFillHeart} from 'react-icons/ai';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hy, <br />
        My name is Zabdiel and this is my portfolio
        </SectionTitle>
        <SectionText>
        Student Software Engineer
        </SectionText>

      {/* <Button onClick={props.handleClick}>Learn More</Button>  */}
      <SectionText>
        This web was made in Next Js and using Styled Components.
        <AiFillHeart size="3rem" style={{marginLeft:'10px'}}/>
      </SectionText>
     
      </LeftSection>
      
    </Section>
   
  </>
);

export default Hero;