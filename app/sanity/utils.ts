import { previewClient } from './client';

const buildUrl = ({ type, slug }: { type: string; slug: string }) => {
    let pathname: string;

    switch (type) {
        case 'home':
            pathname = `/`;
            break;

        case 'post':
            pathname = `/blog/${slug}`;
            break;

        default:
            pathname = slug;
            break;
    }

    return pathname;
};

export const getPath = async (query: string, slug?: { slug: string }) => {
    const validQuery = slug
        ? await previewClient.fetch(query, slug).then((res) => res)
        : await previewClient.fetch(query).then((res) => res);

    return (
        validQuery &&
        buildUrl({
            type: validQuery._type,
            slug: validQuery._type === 'home' ? '/' : validQuery.slug.current,
        })
    );
};
