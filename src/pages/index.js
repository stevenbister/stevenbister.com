import Head from 'next/head';
import CONSTANTS from '@/lib/constants';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  const { SITE_NAME, LINKEDIN, GITHUB } = CONSTANTS();

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Welcome to my personal site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent
        intro="Hello! Welcome to my site, it's under contstruction at the moment
          so please excuse the mess."
        links={{
          LinkedIn: LINKEDIN,
          GitHub: GITHUB,
        }}
      />
    </>
  );
}
