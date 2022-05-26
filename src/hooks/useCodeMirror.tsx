import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';

interface IUseCodeMirror {
    doc: string;
    onChange?: (state: EditorState) => void;
}

const useCodeMirror = <T extends Element>(
    props: IUseCodeMirror
): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer = useRef<T>(null);
    const [editorView, setEditorView] = useState<EditorView>();
    const onChange = { props };

    useEffect(() => {
        if (!refContainer.current) {
            return;
        }

        const startState = EditorState.create({
            doc: props.doc,
            extensions: [keymap.of(defaultKeymap), markdownLanguage],
        });

        const view = new EditorView({
            state: startState,
            parent: refContainer.current,
        });

        setEditorView(view);
    }, [refContainer]);

    return [refContainer, editorView];
};

export default useCodeMirror;
