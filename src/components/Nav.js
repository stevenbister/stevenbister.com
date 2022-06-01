import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className="cluster">
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
