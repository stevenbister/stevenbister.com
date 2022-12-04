import { GearIcon } from '@radix-ui/react-icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    icon: GearIcon,
    groups: [
        {
            default: true,
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Settings',
            hidden: true,
        }),
        defineField({
            name: 'siteSettings',
            title: 'Site settings',
            type: 'object',
            group: 'seo',
            description: 'Defaults for every page',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                {
                    name: 'title',
                    title: 'Site title',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'titleSeparator',
                    title: 'Title Separator',
                    type: 'string',
                    description:
                        'Choose the symbol to use as your title separator. This will display, for instance, between your post title and site name.',
                    options: {
                        list: ['-', '–', '—', '|'],
                        layout: 'radio',
                        direction: 'horizontal',
                    },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'schema',
            title: 'Knowledge Graph & Schema.org',
            type: 'object',
            group: 'seo',
            description:
                "This data is shown as metadata in your site. It is intended to appear in Google's Knowledge Graph. You can be either an organization, or a person.",
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                {
                    name: 'organizationName',
                    title: 'Organization name',
                    type: 'string',
                },
                {
                    name: 'organizationLogo',
                    title: 'Organization logo',
                    type: 'image',
                },
            ],
        }),
        defineField({
            name: 'social',
            title: "Organization's social profiles",
            type: 'object',
            group: 'seo',
            description:
                'Input any profiles on the web that belong to your organization.',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                {
                    name: 'socialProfile',
                    title: 'Social Profile',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
            ],
        }),
        defineField({
            name: 'robots',
            title: 'Search engine visibility',
            type: 'object',
            group: 'seo',
            description: 'It is up to search engines to honor this request.',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                {
                    name: 'noIndex',
                    title: 'Discourage search engines from indexing this site',
                    type: 'boolean',
                },
            ],
        }),
    ],
});
