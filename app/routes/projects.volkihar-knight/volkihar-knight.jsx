import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import cardioE2 from '~/assets/cardio-e2.png';
import cardioE3 from '~/assets/cardio-e3.png';
import cardioE4 from '~/assets/cardio-e4.png';
import cardioE5 from '~/assets/cardio-e5.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
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
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const title = 'CardioPredict';
const description =
  'A machine learning project for predicting heart attack risk levels using clinical indicators.';
const roles = ['Python', 'Random Forest', 'Scikit-learn'];
const project = config.projects.find(entry => entry.slug === 'volkihar-knight');

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View on GitHub"
          url={project?.githubUrl}
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${cardioE3} 800w, ${cardioE3} 1100w`}
              width={800}
              height={436}
              placeholder={cardioE3}
              alt="CardioPredict project hero visual."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview</ProjectSectionHeading>
            <ProjectSectionText>
              CardioPredict is a machine learning project focused on predicting heart
              attack risk levels using clinical health indicators. The aim was to build a
              reliable model and turn raw health data into a more interpretable risk
              assessment.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={cardioE4}
                images={[
                  {
                    srcSet: `${cardioE2} 960w, ${cardioE2} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'CardioPredict data and feature visual.',
                  },
                  {
                    srcSet: `${cardioE4} 960w, ${cardioE4} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'CardioPredict workflow visual.',
                  },
                  {
                    srcSet: `${cardioE5} 960w, ${cardioE5} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'CardioPredict model evaluation visual.',
                  },
                  {
                    srcSet: `${cardioE3} 960w, ${cardioE3} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'CardioPredict results visual.',
                  }
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow center noMargin>
            <ProjectSectionHeading>Key highlights</ProjectSectionHeading>
            <ProjectSectionText>
              The model achieved 98% accuracy, included feature importance analysis, and
              was improved through hyperparameter tuning to make predictions more stable
              and dependable. It reflects my interest in practical ML that balances model
              quality with explainability.
            </ProjectSectionText>
          </ProjectTextRow>
          <Button secondary href={project?.githubUrl} icon="github">
            View GitHub
          </Button>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

