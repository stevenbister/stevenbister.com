import SanityClient from '@sanity/client';

import { projectDetails } from '~/sanity/projectDetails';

export const client = new SanityClient({
    ...projectDetails(),
    useCdn: true,
});

export const previewClient = new SanityClient({
    ...projectDetails(),
    useCdn: false,
    token: process.env.SANITY_READ_TOKEN,
});

export const getClient = (previewMode = false) =>
    previewMode ? previewClient : client;
