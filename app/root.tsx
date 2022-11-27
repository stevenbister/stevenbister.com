import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
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
    return json({
        ENV: {
            SANITY_PUBLIC_PROJECT_ID: process.env.SANITY_PUBLIC_PROJECT_ID,
            SANITY_PUBLIC_DATASET: process.env.SANITY_PUBLIC_DATASET,
            SANITY_PUBLIC_API_VERSION: process.env.SANITY_PUBLIC_API_VERSION,
        },
    });
}

export default function App() {
    const { ENV } = useLoaderData<typeof loader>();

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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.ENV = ${JSON.stringify(ENV)}`,
                    }}
                />
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
