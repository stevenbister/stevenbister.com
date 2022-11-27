import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PreviewSuspense } from '@sanity/preview-kit';
import PostContent, { PostPreview } from '~/components/Post';
import { getClient } from '~/sanity/client';
import { getSession } from '~/session';

export const loader = async ({ request, params }: LoaderArgs) => {
    const session = await getSession(request.headers.get('Cookie'));
    const token = session.get('token');
    const isPreview = Boolean(token);

    const POST_QUERY = `
        *[ _type == "post" && slug.current == $slug ][0] {
            _id,
            title,
            "slug": slug.current,
            publishedAt,
            "categories": categories[]->title,
            body
        }
    `;

    // Query the page data
    const post = await getClient(isPreview)
        .fetch(POST_QUERY, params)
        .then((res) => {
            return res ? res : null;
        });

    if (!post) {
        // const redirect = await shouldRedirect(request);

        // if (redirect) {
        //     return redirect;
        // } else {
        // }
        throw new Response('Not found', { status: 404 });
    }

    // const canonicalUrl = buildCanonicalUrl({
    //     canonical: post?.seo?.canonicalUrl,
    //     request
    // });

    return json({
        post,
        isPreview,
        query: isPreview ? POST_QUERY : null,
        params: isPreview ? params : null,
        // Note: This makes the token available to the client if they have an active session
        // This is useful to show live preview to unauthenticated users
        // If you would rather not, replace token with `null` and it will rely on your Studio auth
        token: isPreview ? token : null,
        // canonicalUrl,
        // query: isPreview ? POST_QUERY : null,
    });
};

export default function Post() {
    const { post, isPreview, query, params, token } =
        useLoaderData<typeof loader>();

    if (isPreview && query && params && token) {
        return (
            <PreviewSuspense fallback={<PostContent {...post} />}>
                <PostPreview query={query} params={params} token={token} />
            </PreviewSuspense>
        );
    }

    return <PostContent {...post} />;
}
