import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      {router.asPath === '/' ? (
        <h1>
          <Link href="/">
            <a aria-current="page">Header</a>
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
