import CONSTANTS from '@/lib/constants';

const Footer = () => {
  const { SITE_NAME } = CONSTANTS();
  const year = new Date().getFullYear();

  return (
    <footer>
      &copy;{year} {SITE_NAME}
    </footer>
  );
};
export default Footer;
