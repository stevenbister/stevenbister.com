import { definePreview } from '@sanity/preview-kit';
import { projectDetails } from '~/sanity/projectDetails';
import ExitPreview from './ExitPreview';
import PortableText from './PortableText';

interface Props {
    title: string;
    body: any;
    categories: string[];
    publishedAt: Date;
}

export default function PostContent(props: Props) {
    const { title, body, categories, publishedAt } = props;

    const hasCategories = categories && categories.length > 0;
    const published = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-GB')
        : null;

    return (
        <main>
            <div className="o-container o-container--xsmall">
                {title ? <h1>{title}</h1> : null}
                {publishedAt ? <p>Published: {published}</p> : null}

                {hasCategories ? categories.map((category) => category) : null}

                {body && body.length > 0 ? <PortableText value={body} /> : null}
            </div>
        </main>
    );
}

interface PreviewProps {
    query: string;
    params: { [key: string]: string };
    token: string | null;
}

const { projectId, dataset } = projectDetails();
const usePreview = definePreview({ projectId, dataset });

export function PostPreview(props: PreviewProps) {
    const { query, params, token } = props;

    const data = usePreview(token ?? null, query, params);

    return (
        <>
            <ExitPreview />
            <PostContent {...data} />
        </>
    );
}
