import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { ClientOnly } from 'remix-utils';
import { Studio } from 'sanity';

import styles from '~/css/studio.css';
import config from '../../../sanity.config';

export const meta: MetaFunction = () => ({
    title: 'Sanity Studio',
    robots: 'noindex',
});

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

export default function StudioPage() {
    return <ClientOnly>{() => <Studio config={config} />}</ClientOnly>;
}
