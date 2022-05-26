import React from 'react';
import Editor from './../../components/Editor/Editor';

import styles from './generator.module.css';

interface iGeneratorProps {}

const Generator: React.FC<iGeneratorProps> = (props) => {
    return (
        <div className={styles.generator_wrapper}>
            <Editor />
        </div>
    );
};

export default Generator;
