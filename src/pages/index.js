import Head from 'next/head';
import CONSTANTS from '@/lib/constants';

export default function Home() {
  const { SITE_NAME } = CONSTANTS();

  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Welcome to my personal site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{SITE_NAME}</h1>
    </div>
  );
}
