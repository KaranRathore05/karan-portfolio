import fundifyF1 from '~/assets/fundify-f1.png';
import fundifyF2 from '~/assets/fundify-f2.png';
import fundifyF3 from '~/assets/fundify-f3.png';
import fundifyF4 from '~/assets/fundify-f4.png';
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
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import config from '~/config.json';

const title = 'Fundify Campus';
const description =
  'A decentralized student crowdfunding platform built with the MERN stack and Algorand blockchain.';
const roles = ['MERN Stack', 'Algorand', 'node-cron'];
const project = config.projects.find(entry => entry.slug === 'smart-sparrow');

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.55}
          src={fundifyF1}
          srcSet={`${fundifyF1} 1080w, ${fundifyF1} 2160w`}
          placeholder={fundifyF1}
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
              raised
              srcSet={`${fundifyF2} 1280w, ${fundifyF2} 2560w`}
              width={1280}
              height={800}
              placeholder={fundifyF2}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Fundify Campus project preview."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview</ProjectSectionHeading>
            <ProjectSectionText>
              Fundify Campus is a zero-fee decentralized crowdfunding platform created
              for campus innovators. The goal was to make student-led fundraising more
              transparent, secure, and practical by combining a familiar full-stack web
              experience with blockchain-backed contributions.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${fundifyF3} 1024w, ${fundifyF3} 2048w`}
              width={1024}
              height={800}
              placeholder={fundifyF3}
              alt="Fundify Campus features and interface system."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Key highlights</ProjectSectionHeading>
              <ProjectSectionText>
                The platform won ACE Hack 5.0, integrated Pera Wallet and algosdk for
                secure peer-to-peer contributions, and used node-cron to automate refund
                handling for expired campaigns. Together, those features made the product
                more trustworthy and easier to operate.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${fundifyF4} 1280w, ${fundifyF4} 2560w`}
              width={1280}
              height={800}
              placeholder={fundifyF4}
              alt="Fundify Campus workflow and implementation details."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Why it matters</ProjectSectionHeading>
              <ProjectSectionText>
                This project reflects a blend of product thinking, full-stack execution,
                and Web3 experimentation. It also demonstrates how I approach practical
                software: solve a clear problem, keep the user flow simple, and make the
                system reliable underneath.
              </ProjectSectionText>
            </ProjectTextRow>
                <Button secondary href={project?.liveUrl} icon="link" target="_blank" rel="noreferrer">
              Live link
            </Button>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
