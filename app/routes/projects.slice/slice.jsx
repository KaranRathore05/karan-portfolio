import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import sendMeChaiQ1 from '~/assets/sendmechai-q1.png';
import sendMeChaiQ2 from '~/assets/sendmechai-q2.png';
import sendMeChaiQ3 from '~/assets/sendmechai-q3.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';

const title = 'Send Me a Chai';
const description =
  'A creator-centric crowdfunding platform built for smoother supporter interactions and online contributions.';
const roles = ['Next.js', 'Tailwind CSS', 'Razorpay', 'GitHub OAuth'];
const project = config.projects.find(entry => entry.slug === 'slice');

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url={project?.githubUrl}
          linkLabel="View on GitHub"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sendMeChaiQ1} 800w, ${sendMeChaiQ1} 1920w`}
              width={800}
              height={500}
              placeholder={sendMeChaiQ1}
              alt="Send Me a Chai project preview."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview</ProjectSectionHeading>
            <ProjectSectionText>
              Send Me a Chai is a crowdfunding platform designed around creators and
              supporters. The focus was on making contributions feel smooth while also
              giving creators better account control, messaging, and visibility into
              supporter activity.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${sendMeChaiQ2} 800w, ${sendMeChaiQ2} 1920w`}
              width={800}
              height={500}
              placeholder={sendMeChaiQ2}
              alt="Send Me a Chai feature overview."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Key highlights</ProjectSectionHeading>
              <ProjectSectionText>
                The platform integrates GitHub OAuth login, Razorpay payments, dashboard
                views, real-time notifications, secure profiles, and personalized
                supporter messaging. These features improve both trust and usability for
                online contributions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${sendMeChaiQ3} 440w, ${sendMeChaiQ3} 880w`}
              width={440}
              height={340}
              placeholder={sendMeChaiQ3}
              alt="Payment and supporter interaction details for Send Me a Chai."
              sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Why it matters</ProjectSectionHeading>
              <ProjectSectionText>
                This project shows my ability to build polished product flows on top of
                modern frontend tooling and payment integrations. It also reflects a
                strong interest in developer-focused products and user-friendly
                experiences.
              </ProjectSectionText>
            </ProjectTextRow>
                <Button secondary href={project?.liveUrl} icon="link" target="_blank" rel="noreferrer">
              Live link
            </Button>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
