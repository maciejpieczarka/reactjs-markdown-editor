import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import rehypeReact from 'rehype-react';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify/lib';

import './preview.css';
import 'github-markdown-css/github-markdown.css';

interface IPreviewProps {
    doc: string;
}

const Preview: React.FC<IPreviewProps> = ({ doc }) => {
    const md = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeReact, React)
        .processSync(doc).result;

    return (
        <div className={`text-container preview_wrapper markdown-body`}>
            {md}
        </div>
    );
};

export default Preview;
