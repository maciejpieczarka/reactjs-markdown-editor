import React from 'react';
import Editor from './../../components/Editor/Editor';
import Preview from './../../components/Preview/Preview';

import styles from './generator.module.css';

interface iGeneratorProps {}

const Generator: React.FC<iGeneratorProps> = (props) => {
    return (
        <div className={styles.generator_wrapper}>
            <Editor />
            <Preview />
        </div>
    );
};

export default Generator;
