import { EditorState } from '@codemirror/state';
import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './../../hooks/useCodeMirror';
// Css
import styles from './editor.module.css';

interface IEditorProps {
    doc: string;
    onChange: (doc: string) => void;
}

const Editor: React.FC<IEditorProps> = (props) => {
    const { onChange } = props;
    const handleChange = useCallback(
        (state: EditorState) => {
            onChange(state.doc.toString());
        },
        [onChange]
    );

    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        doc: props.doc,
        onChange: handleChange,
    });

    useEffect(() => {
        if (editorView) {
        }
    }, [editorView]);
    return (
        <div
            className={`text-container ` + styles.editor_wrapper}
            ref={refContainer}
        ></div>
    );
};

export default Editor;
