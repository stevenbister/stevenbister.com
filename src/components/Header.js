import Link from 'next/link';
import { useRouter } from 'next/router';
import CONSTANTS from '@/lib/constants';

const Header = () => {
  const router = useRouter();
  const { SITE_NAME } = CONSTANTS();

  return (
    <header className="header">
      {router.asPath === '/' ? (
        <h1>
          <Link href="/">
            <a aria-current="page">{SITE_NAME}</a>
          </Link>
        </h1>
      ) : (
        <Link href="/">
          <a>Header</a>
        </Link>
      )}
    </header>
  );
};
export default Header;
