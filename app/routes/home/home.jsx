import fundifyMobile2 from '~/assets/fundify-mobile-2.png';
import chaiTextureLarge from '~/assets/chai-phone-large.jpg';
import chaiTexturePlaceholder from '~/assets/chai-phone-placeholder.jpg';
import chaiTexture from '~/assets/chai-phone.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import fundifyMainTexture from '~/assets/fundify-main.png';
import cardioE1 from '~/assets/cardio-e1.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: `${config.role} Portfolio`,
    description: `${config.name} is a ${config.fullRole} based in ${config.location}.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Fundify Campus"
        description="Decentralized student crowdfunding platform built with MERN, Algorand, and automated refund workflows."
        buttonText="View project"
        buttonLink="/projects/fundify-campus"
        model={{
          type: 'laptop',
          alt: 'Fundify Campus project preview',
          textures: [
            {
              srcSet: `${fundifyMainTexture} 1280w, ${fundifyMainTexture} 2560w`,
              placeholder: fundifyMainTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Get Me a Chai"
        description="Creator-centric crowdfunding platform with GitHub OAuth, Razorpay payments, and supporter-focused interactions."
        buttonText="View project"
        buttonLink="/projects/send-me-a-chai"
        model={{
          type: 'phone',
          alt: 'Get Me a Chai project preview',
          textures: [
            {
              srcSet: `${chaiTexture} 375w, ${chaiTextureLarge} 750w`,
              placeholder: chaiTexturePlaceholder,
            },
            {
              srcSet: `${fundifyMobile2} 375w, ${fundifyMobile2} 750w`,
              placeholder: fundifyMobile2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="CardioPredict"
        description="Heart attack risk prediction project using Python, Random Forest, and Scikit-learn with 98% accuracy."
        buttonText="View project"
        buttonLink="/projects/cardio-predict"
        model={{
          type: 'laptop',
          alt: 'CardioPredict project preview',
          textures: [
            {
              srcSet: `${cardioE1} 800w, ${cardioE1} 1920w`,
              placeholder: cardioE1,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
