import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import acehackImg from '~/assets/acehack-profile.jpg';
import hackupImg from '~/assets/hackup-profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import config from '~/config.json';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId, isContact, achievement = "acehack" }) => {
  let titleStr = "Contact me";
  if (!isContact) {
    titleStr = achievement === "acehack" ? "ACEHACK 5.0" : "HackWithUttarPradesh 2025";
  }

  return (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text={titleStr} start={visible} delay={500} />
    </Heading>
    {isContact ? (
      <Fragment>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          {`${config.name} won ACE Hack 5.0 with Fundify Campus, a decentralized crowdfunding platform built for student innovators. This is one of the strongest highlights in my portfolio and reflects my focus on practical, product-driven problem solving.`}
        </Text>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          {`My certifications include C Training from IIT Bombay, DSA in Java from Apna College, a Java Internship certificate from CodSoft, and the HackwithUttarpradesh certificate. You can also connect with me on `}
          <Link href={config.linkedin}>LinkedIn</Link>, check out my{' '}
          <Link href={config.githubUrl}>GitHub</Link>, or <Link href="/contact">send a message</Link>.
        </Text>
      </Fragment>
    ) : achievement === "acehack" ? (
      <Fragment>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          AceHack 5.0 is a competitive hackathon that brought together talented developers, designers, and innovators to solve real-world problems through technology. During the event, I collaborated with a team to design and build a decentralized crowdfunding platform, focusing on creating a seamless, secure, and user-friendly experience using modern web and blockchain technologies.
        </Text>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          Our project, Fundify Campus, was recognized as the Winner of AceHack 5.0, highlighting our ability to deliver a high-impact solution under time constraints. This experience strengthened my skills in full-stack development, problem-solving, and teamwork, while also giving me exposure to real-world project building and innovation-driven environments.
        </Text>
      </Fragment>
    ) : (
      <Fragment>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          💻 30 Hours. One Mission — Innovation! 🚀 What an incredible experience participating in HackWithUttarPradesh 2025, hosted at CHANDIGARH UNIVERSITY, Lucknow, and powered by BLACKBOX.AI! ❤️ Our team — Helios Hacker — built DeployEase, an AI-powered CLI tool that lets you deploy any website with just one command. From GitHub repo creation to live hosting — everything happens automatically! ⚙️
        </Text>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
          💡 What Makes DeployEase Unique<br/>
          DeployEase isn’t just a deployment tool — it’s your AI companion for flawless releases:<br/>
          🪲 Detects &amp; fixes bugs before deployment<br/>
          💡 Suggests performance &amp; security improvements<br/>
          📘 Auto-generates professional documentation<br/>
          🧠 Explains errors with step-by-step fixes
        </Text>
      </Fragment>
    )}
  </Fragment>
  );
};

export const Profile = ({ id, visible, sectionRef, isContact = true, achievement = "acehack" }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={`${styles.profile} _section_1278e_3 _profile_1pmvm_1`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
      data-is-contact={isContact}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} isContact={isContact} achievement={achievement} />
              {isContact && (
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send a message
                </Button>
              )}
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {isContact ? "Contact me" : achievement === "acehack" ? "ACEHACK 5.0" : "HackWithUttarpradesh"}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={isContact
                    ? `${profileImg} 480w, ${profileImgLarge} 960w`
                    : achievement === 'acehack'
                      ? `${acehackImg} 480w, ${acehackImg} 960w`
                      : `${hackupImg} 480w, ${hackupImg} 960w`
                  }
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt={`Portrait of ${config.name}`}
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={isContact ? `${katakana}#katakana-profile` : `${katakana}#katakana-achievement`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
