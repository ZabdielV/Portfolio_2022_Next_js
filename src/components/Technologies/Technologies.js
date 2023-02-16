import React from 'react';
import { DiFirebase, DiReact, DiZend,DiVisualstudio,DiDatabase,DiOnedrive } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List,List2, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development.
      From Back-end To Design and other.
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
              <li>React JS</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Boostrap</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
              <li>Express JS</li>
              <li>Next JS</li>
              <li>Node JS</li>
              <li>Spring boot (JPA)</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
             <li>Figma</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programing languages</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
              <li>C#</li>
              <li>Java/Kotlin</li>
              <li>Python</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
              <li>MySQL</li>
              <li>Postgresql</li>
              <li>MongoDB</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiOnedrive size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
          <List2>
            <ul>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>Aws</li>
            </ul>
            </List2>
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
