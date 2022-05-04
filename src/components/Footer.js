import CONSTANTS from '@/lib/constants';

const Footer = () => {
  const { SITE_NAME } = CONSTANTS();
  const year = new Date().getFullYear();

  return (
    <footer className="footer container align-center">
      &copy;{year} {SITE_NAME}
    </footer>
  );
};
export default Footer;
