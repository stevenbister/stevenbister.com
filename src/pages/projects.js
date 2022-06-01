import Head from 'next/head';
import CONSTANTS from '@/lib/constants';
import { getAllPages } from '@/lib/getPosts';
import Link from 'next/link';

const Projects = ({ projectItems }) => {
  const { SITE_NAME } = CONSTANTS();

  return (
    <>
      <Head>
        <title>Projects | {SITE_NAME}</title>
        <meta name="description" content="Welcome to my personal site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="container box">
        <h1>Projects</h1>
        {projectItems.length > 0 ? (
          <ul>
            {projectItems.map((item) => (
              <li key={item.slug.join('-')}>
                <Link href={`/${item.slug.join('/')}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allPages = getAllPages(['slug', 'title', 'excerpt']);

  // Pick out only the project items
  const projectItems = allPages.filter((item) =>
    item.slug.includes('projects'),
  );

  return {
    props: { projectItems },
  };
}
