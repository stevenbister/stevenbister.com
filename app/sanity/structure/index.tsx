import type {
    DefaultDocumentNodeResolver,
    StructureResolver,
} from 'sanity/desk';

import { projectDetails } from '~/sanity/projectDetails';
// TODO: This is unused, needs to be sorted and added to the structure
export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            // Singleton, home page curation
            S.documentListItem()
                .schemaType('home')
                // .icon(Home)
                .id('home')
                .title('Home'),
            S.divider(),
            // Document lists
            S.divider(),
        ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType, getClient },
) => {
    const { apiVersion } = projectDetails();
    const client = getClient({ apiVersion });

    switch (schemaType) {
        // case `record`:
        //     return S.document().views([
        //         S.view.form(),
        //         S.view
        //             .component(Iframe)
        //             .options({
        //                 url: (doc: SanityDocumentWithSlug) =>
        //                     resolvePreviewUrl(doc, client),
        //                 reload: { button: true },
        //             })
        //             .title('Preview'),
        //     ]);

        default:
            return S.document().views([S.view.form()]);
    }
};
