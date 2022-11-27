import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

import styles from './css/main.css';

export const meta: MetaFunction = () => {
    return { title: 'New Remix App' };
};

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'preload',
            href: '/fonts/Inter/Inter-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
        },
        {
            rel: 'preload',
            href: '/fonts/Inter/Inter-Regular.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
        },
        {
            rel: 'preload',
            href: '/fonts/Inter/Inter-Bold.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
        },
        {
            rel: 'preload',
            href: '/fonts/Inter/Inter-Bold.woff',
            as: 'font',
            type: 'font/woff',
            crossOrigin: 'anonymous',
        },
    ];
};

export async function loader({ request }: LoaderArgs) {
    return json({});
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="t-font-primary">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
