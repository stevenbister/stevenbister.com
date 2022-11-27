import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PortableText from '~/components/PortableText';
import getPageData from '~/models/sanity.server';

interface PageData {
    page: any; // TODO: Type this maybe zod? 👀
    isPreview: boolean;
}

export const loader: LoaderFunction = async ({ request, params }) => {
    if (!params.slug) throw new Error('Missing slug');

    const POST_QUERY = `
        *[ _type == "post" && slug.current == $slug ] {
            _id,
            _rev,
            _type,
            title,
            publishedAt,
            categories[]->{
                title
            },
            body
        }
    `;

    // Query the page data
    const data = await getPageData({
        request,
        params,
        query: POST_QUERY,
    });

    if (!data?.page) {
        // const redirect = await shouldRedirect(request);

        // if (redirect) {
        //     return redirect;
        // } else {
        // }
        throw new Response('Not found', { status: 404 });
    }

    const { page: post, isPreview }: PageData = data;
    // const canonicalUrl = buildCanonicalUrl({
    //     canonical: post?.seo?.canonicalUrl,
    //     request
    // });

    return json({
        post,
        isPreview,
        // canonicalUrl,
        query: isPreview ? POST_QUERY : null,
    });
};

export default function Post() {
    const { post } = useLoaderData<typeof loader>();
    const { title, body, categories, publishedAt } = post;

    const hasCategories = categories && categories.length > 0;
    const published = new Date(publishedAt).toLocaleDateString('en-GB');

    return (
        <main>
            <div className="o-container o-container--xsmall">
                <h1>{title}</h1>
                <p>Published: {published}</p>

                {hasCategories
                    ? categories.map((category) => category.title)
                    : null}

                <PortableText value={body} />
            </div>
        </main>
    );
}
