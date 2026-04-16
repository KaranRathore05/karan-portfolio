import config from '~/config.json';

export const navLinks = [
  { label: 'Projects', pathname: '/#project-1' },
  { label: 'Achievements', pathname: '/achievements' },
  { label: 'Skills', pathname: '/skills' },
  { label: 'Experience', pathname: '/uses' },
  { label: 'Contact', pathname: '/contact' }
];

export const socialLinks = [
  config.github && {
    label: 'GitHub',
    url: config.githubUrl || `https://github.com/${config.github}`,
    icon: 'github'
  },
  config.linkedin && {
    label: 'LinkedIn',
    url: config.linkedin,
    icon: 'linkedin'
  },
  config.email && {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email'
  }
].filter(Boolean);
