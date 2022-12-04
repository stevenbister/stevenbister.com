import type { Params } from '@remix-run/react';
import { getClient } from '~/sanity/client';
import { getSession } from '~/session';

export const getToken = async (request: Request) => {
    const session = await getSession(request.headers.get('Cookie'));

    return session.get('token');
};

interface getPageDataArgs {
    query: string;
    params: Params<string>;
    isPreview: boolean;
}

export const getPageData = async ({
    query,
    params,
    isPreview,
}: getPageDataArgs) => {
    // Query the page data
    const pageData = await getClient(isPreview)
        .fetch(query, params)
        .then((res) => {
            return res ? res : null;
        });

    if (!pageData) {
        // const redirect = await shouldRedirect(request);

        // if (redirect) {
        //     return redirect;
        // } else {
        // }
        throw new Response('Not found', { status: 404 });
    }

    return pageData;
};
