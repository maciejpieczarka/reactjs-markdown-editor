import React, { useState, useCallback, useEffect } from 'react';
import useCodeMirror from './../../hooks/useCodeMirror';
// Css
import styles from './editor.module.css';

interface IEditorProps {}

const Editor: React.FC<IEditorProps> = (props) => {
    const onChange = { props };

    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        doc: '# Hi, JW!',
        onChange: () => {},
    });

    useEffect(() => {}, []);
    return (
        <div
            className={`text-container ` + styles.editor_wrapper}
            ref={refContainer}
        ></div>
    );
};

export default Editor;
