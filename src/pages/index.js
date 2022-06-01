import Head from 'next/head';
import CONSTANTS from '@/lib/constants';

export default function Home() {
  const { SITE_NAME } = CONSTANTS();

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Welcome to my personal site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container box">
        <div className="stack" style={{ width: '100%', maxWidth: '74ch' }}>
          <p className="fs-4 fw-600">Hello, I'm Steven</p>
          <p className="fs-1">I'm a frontend web developer</p>
          <p className="fs-1">
            This is my little piece of the internet. I'll probably use this to
            do little case studies of my personal projects and maybe share some
            code snippets. But generally this will just be my playground for
            trying out new things.
          </p>
        </div>
      </div>
    </>
  );
}
