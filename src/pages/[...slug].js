import Head from 'next/head';
import { getPageBySlug, getAllPages } from '@/lib/getPosts';
import markdownToHtml from '@/lib/markdownToHtml';
import CONSTANTS from '@/lib/constants';

const Page = ({ page }) => {
  const { SITE_NAME } = CONSTANTS();

  return (
    <>
      <Head>
        <title>
          {page.title} | {SITE_NAME}
        </title>

        {/* TODO: Canonical tag */}

        {page.excerpt ? (
          <meta name="description" content={page.excerpt} />
        ) : null}

        {page.noindex ? <meta name="robots" content="noindex" /> : null}
      </Head>
      <article className="container box">
        <h1>{page.title}</h1>

        {page.excerpt ? <p>{page.excerpt}</p> : null}

        {/* TODO: Split this out into a separate component probably */}
        {page.link || page.github ? (
          <ul>
            {page.link ? (
              <li>
                <a href={page.link}>Site</a>
              </li>
            ) : null}

            {page.github ? (
              <li>
                <a href={page.github}>GitHub</a>
              </li>
            ) : null}
          </ul>
        ) : null}

        <div
          className="stack"
          style={{ maxWidth: '74ch' }}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </article>
    </>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/'); // Rebuild our slug so we can take subdirectories into account

  const page = getPageBySlug(slug, [
    'title',
    'content',
    'excerpt',
    'link',
    'github',
    'noindex',
  ]);

  const content = await markdownToHtml(page.content || '');

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const pages = getAllPages(['slug']);

  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
