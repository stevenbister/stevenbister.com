import { HomeIcon } from '@radix-ui/react-icons';
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            default: true,
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            initialValue: 'Home',
            hidden: true,
            group: 'content',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            group: 'content',
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],
});
