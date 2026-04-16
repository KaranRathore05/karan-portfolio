import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';

// AceHack carousel images
import acehackSlide1 from '~/assets/acehack-slide-1.jpg';
import acehackSlide2 from '~/assets/acehack-slide-2.jpg';
import acehackSlide3 from '~/assets/acehack-slide-3.jpg';
import acehackSlide4 from '~/assets/acehack-slide-4.jpg';

// HackWithUttarPradesh carousel images
import hackupSlide1 from '~/assets/hackup-slide-1.jpg';
import hackupSlide2 from '~/assets/hackup-slide-2.jpg';
import hackupSlide3 from '~/assets/hackup-slide-3.jpg';
import hackupSlide4 from '~/assets/hackup-slide-4.jpg';
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
import { media } from '~/utils/style';
import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import config from '~/config.json';
import { Profile } from '~/routes/home/profile';
import styles from './achievements.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

export const meta = () => {
  return baseMeta({
    title: 'Achievements',
    description: 'Achievements, certifications, and milestone highlights for Karanpal Singh.',
  });
};

export const Achievements = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const profileOne = useRef();
  const profileTwo = useRef();

  useEffect(() => {
    const sections = [profileOne, profileTwo];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <>
      <ProjectContainer className={styles.achievements}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Achievements"
          description="A quick overview of my strongest milestones, including hackathon recognition, problem-solving progress, and certifications."
        />
        <Profile 
          sectionRef={profileOne}
          visible={visibleSections.includes(profileOne.current)} 
          id="profile" 
          isContact={false} 
        />
        <ProjectSection>
          <ProjectSectionContent width="xl">
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${acehackSlide1} 960w, ${acehackSlide1} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'AceHack 5.0 photo 1.',
                  },
                  {
                    srcSet: `${acehackSlide2} 960w, ${acehackSlide2} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'AceHack 5.0 photo 2.',
                  },
                  {
                    srcSet: `${acehackSlide3} 960w, ${acehackSlide3} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'AceHack 5.0 photo 3.',
                  },
                  {
                    srcSet: `${acehackSlide4} 960w, ${acehackSlide4} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'AceHack 5.0 photo 4.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <Profile 
          sectionRef={profileTwo}
          visible={visibleSections.includes(profileTwo.current)} 
          id="profile-hackup" 
          isContact={false} 
          achievement="hackup" 
        />
        <ProjectSection>
          <ProjectSectionContent width="xl">
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${hackupSlide1} 960w, ${hackupSlide1} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'HackWithUttarPradesh 2025 photo 1.',
                  },
                  {
                    srcSet: `${hackupSlide2} 960w, ${hackupSlide2} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'HackWithUttarPradesh 2025 photo 2.',
                  },
                  {
                    srcSet: `${hackupSlide3} 960w, ${hackupSlide3} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'HackWithUttarPradesh 2025 photo 3.',
                  },
                  {
                    srcSet: `${hackupSlide4} 960w, ${hackupSlide4} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'HackWithUttarPradesh 2025 photo 4.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
