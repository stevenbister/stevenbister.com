import { FileIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons';
import Iframe from 'sanity-plugin-iframe-pane';
import type {
    DefaultDocumentNodeResolver,
    StructureResolver,
} from 'sanity/desk';
import { projectDetails } from '~/sanity/projectDetails';
import type { SanityDocumentWithSlug } from '~/sanity/structure/resolvePreviewUrl';
import { resolvePreviewUrl } from '~/sanity/structure/resolvePreviewUrl';

// TODO: This is unused, needs to be sorted and added to the structure
export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            // Singleton, home page curation
            S.documentListItem()
                .schemaType('home')
                .icon(HomeIcon)
                .id('home')
                .title('Home'),
            S.divider(),
            // Document lists
            S.documentTypeListItem('post').icon(FileIcon).title('Posts'),
            S.documentTypeListItem('category')
                .icon(FileIcon)
                .title('Categories'),
            S.divider(),
            S.documentListItem()
                .schemaType('settings')
                .icon(GearIcon)
                .id('settings')
                .title('Settings'),
        ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType, getClient },
) => {
    const { apiVersion } = projectDetails();
    const client = getClient({ apiVersion });

    switch (schemaType) {
        case `home`:
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

        case `settings`:
            return S.document().views([S.view.form()]);

        default:
            return S.document().views([S.view.form()]);
    }
};
