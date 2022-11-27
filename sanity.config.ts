import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import { projectDetails } from '~/sanity/projectDetails';
import { schemaTypes } from '~/sanity/schemas';
import { defaultDocumentNode, structure } from '~/sanity/structure';

const settings = projectDetails();

const devOnlyPlugins = [
    visionTool({
        defaultApiVersion: settings.apiVersion,
        defaultDataset: settings.dataset,
    }),
];

export default defineConfig({
    ...settings,
    name: 'default',
    title: 'stevenbister.com',
    basePath: '/studio',

    plugins: [
        deskTool({ structure, defaultDocumentNode }),
        ...(isDev ? devOnlyPlugins : []),
    ],

    schema: {
        types: schemaTypes,
    },
});
