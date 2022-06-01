import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from './Nav';
import CONSTANTS from '@/lib/constants';

const Header = () => {
  const router = useRouter();
  const { SITE_NAME } = CONSTANTS();

  return (
    <header
      className="container box cluster"
      style={{ '--cluster-justify': 'space-between' }}
    >
      {router.asPath === '/' ? (
        <h1 className="fs-1 fw-400">
          <Link href="/">
            <a aria-current="page" className="decorate-none">
              {SITE_NAME}
            </a>
          </Link>
        </h1>
      ) : (
        <p className="fs-1 fw-400">
          <Link href="/">
            <a className="decorate-none">{SITE_NAME}</a>
          </Link>
        </p>
      )}

      <Nav />
    </header>
  );
};
export default Header;
