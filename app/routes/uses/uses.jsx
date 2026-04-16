import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Experience',
    description: 'Experience, internships, and practical work highlights for Karanpal Singh.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Experience"
          description="A short look at the internships, training, and practical work that shaped my development and problem-solving skills."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>IIT Bombay - Spoken Tutorial Project</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>C Programming Trainee</ListItem>
                  <ListItem>Remote | 2024</ListItem>
                  <ListItem>
                    Strengthened problem-solving and procedural programming skills through
                    structured assignments and practical exercises.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Muskurahat Foundation</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>Crowdfunding Intern</ListItem>
                  <ListItem>Mumbai (Remote) | Jan 2025</ListItem>
                  <ListItem>
                    Worked on outreach strategies, donor engagement, and campaign
                    promotion to improve participation.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Core strengths</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>{config.fullRole}</ListItem>
                  <ListItem>Interest in scalable systems, product thinking, and clean UI</ListItem>
                  <ListItem>Hands-on work across full-stack apps, Web3, and machine learning</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
