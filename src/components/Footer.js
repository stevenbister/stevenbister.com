import CONSTANTS from '@/lib/constants';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const { SITE_NAME, LINKEDIN, GITHUB } = CONSTANTS();
  const year = new Date().getFullYear();

  return (
    <footer
      className="container box cluster"
      style={{ '--cluster-justify': 'space-between' }}
    >
      <p>
        &copy;{year} {SITE_NAME}
      </p>
      <SocialIcons
        links={{
          LinkedIn: LINKEDIN,
          GitHub: GITHUB,
        }}
      />
    </footer>
  );
};
export default Footer;
