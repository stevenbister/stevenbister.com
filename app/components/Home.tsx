import { definePreview } from '@sanity/preview-kit';
import { projectDetails } from '~/sanity/projectDetails';
import ExitPreview from './ExitPreview';
import PortableText from './PortableText';
import PostContent from './Post';

interface Props {
    body: any;
}

export default function HomeContent(props: Props) {
    const { body } = props;

    return (
        <main>
            <div className="o-container o-container--xsmall">
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

export function HomePreview(props: PreviewProps) {
    const { query, params, token } = props;

    const data = usePreview(token ?? null, query, params);

    return (
        <>
            <ExitPreview />
            <PostContent {...data} />
        </>
    );
}
