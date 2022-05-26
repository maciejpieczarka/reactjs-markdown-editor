import React from 'react';

import styles from './preview.module.css';

interface IPreviewProps {}

const Preview: React.FC<IPreviewProps> = (props) => {
    return (
        <div className={`text-container ${styles.preview_wrapper}`}>
            Preview
        </div>
    );
};

export default Preview;
