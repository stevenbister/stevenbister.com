import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'seo',
    title: 'Seo',
    type: 'object',
    icon: MagnifyingGlassIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) =>
                Rule.max(50).warning(
                    'Longer titles may be truncated by search engines',
                ),
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical Url',
            type: 'url',
            description: 'Leave blank to use the default url for this page',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
                Rule.max(150).warning(
                    'Longer descriptions may be truncated by search engines',
                ),
        }),
        defineField({
            name: 'robots',
            title: 'Search engine visibility',
            type: 'object',
            description: 'It is up to search engines to honor this request.',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                {
                    name: 'noIndex',
                    title: 'Discourage search engines from indexing this page',
                    type: 'boolean',
                },
            ],
        }),
    ],
});
