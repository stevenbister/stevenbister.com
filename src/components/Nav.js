import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="cluster">
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
