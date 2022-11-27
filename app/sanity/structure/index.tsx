import Iframe from 'sanity-plugin-iframe-pane';
import type {
    DefaultDocumentNodeResolver,
    StructureResolver,
} from 'sanity/desk';
import type { SanityDocumentWithSlug } from '~/sanity/structure/resolvePreviewUrl';
import { resolvePreviewUrl } from '~/sanity/structure/resolvePreviewUrl';

import { projectDetails } from '~/sanity/projectDetails';
// TODO: This is unused, needs to be sorted and added to the structure
export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            // Singleton, home page curation
            // S.documentListItem()
            //     .schemaType('home')
            //     // .icon(Home)
            //     .id('home')
            // .title('Home'),
            S.divider(),
            // Document lists
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('category').title('Categories'),
            S.divider(),
        ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType, getClient },
) => {
    const { apiVersion } = projectDetails();
    const client = getClient({ apiVersion });

    switch (schemaType) {
        case `post`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocumentWithSlug) =>
                            resolvePreviewUrl(doc, client),
                        reload: { button: true },
                    })
                    .title('Preview'),
            ]);

        default:
            return S.document().views([S.view.form()]);
    }
};
