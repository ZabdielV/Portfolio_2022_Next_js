import React from 'react';
import { DiFirebase, DiReact, DiZend,DiVisualstudio,DiDatabase,DiOnedrive } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List,List2, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies.
      From Back-end, Front-End, Databases and other.
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
              <li>HTML/CSS</li>
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
              <li>Next JS</li>
              <li>Spring boot (JPA)</li>
              <li>Go (Golang)</li>
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
              <li>Java/Kotlin</li>
              <li>Golang</li>
              <li>Javascript/Typescript</li>
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
              <li>AWS (AWS Certified Cloud Practitioner)</li>
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
