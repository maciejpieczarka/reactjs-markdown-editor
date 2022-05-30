import React, { useCallback, useState } from 'react';
import Editor from './../../components/Editor/Editor';
import Preview from './../../components/Preview/Preview';
// import Toolbar from '../../components/Toolbar/Toolbar';

import './generator.css';

interface iGeneratorProps {}

const Generator: React.FC<iGeneratorProps> = (props) => {
    const [doc, setDoc] = useState<string>(
        '# React.js Markdown Generator\n\n## Dependencies\n- **Codemirror6** - Extensible Code Editor Library  \n- **Remark.js** - Extensible Markdown processor  \n- **TypeScript** - JavaScript with static types\n\n## Installation\n1. Clone Repository, open terminal and type:\n```bash\nnpm install\n```\n2. After installing dependencies just start the app by typing:\n```bash\nnpm start\n```'
    );

    const handleDocChange = useCallback((newDoc: string) => {
        setDoc(newDoc);
    }, []);

    return (
        <div className="generator-wrapper">
            <Editor onChange={handleDocChange} doc={doc} />
            <Preview doc={doc} />
        </div>
    );
};

export default Generator;
