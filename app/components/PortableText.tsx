import { PortableText as ReactPortableText } from '@portabletext/react';

type ContentProps = {
    value: any[];
};

// TODO:
// const components = {
//   types: {
//     image: SanityImage,
//   },
// }

export default function PortableText(props: ContentProps) {
    const { value } = props;

    return (
        <div>
            <ReactPortableText
                value={value}
                // components={components}
            />
        </div>
    );
}
