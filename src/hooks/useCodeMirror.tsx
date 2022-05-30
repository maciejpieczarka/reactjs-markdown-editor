import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import {
    EditorView,
    keymap,
    highlightActiveLine,
    highlightActiveLineGutter,
    lineNumbers,
    drawSelection,
} from '@codemirror/view';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import {
    defaultKeymap,
    history,
    historyKeymap,
    indentWithTab,
} from '@codemirror/commands';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { tags } from '@lezer/highlight';
import {
    HighlightStyle,
    syntaxHighlighting,
    bracketMatching,
} from '@codemirror/language';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

const transparentTheme = EditorView.theme({
    '&': {
        backgroundColor: '#292B36 !important',
        height: '100%',
    },
});

const mdHighlight = HighlightStyle.define([
    {
        tag: tags.heading1,
        fontSize: '1.6em',
        fontWeight: 'bold',
    },
    {
        tag: tags.heading2,
        fontSize: '1.4em',
        fontWeight: 'bold',
    },
    {
        tag: tags.heading3,
        fontSize: '1.2em',
        fontWEight: 'bold',
    },
]);

interface IUseCodeMirror {
    doc: string;
    onChange?: (state: EditorState) => void;
}

const useCodeMirror = <T extends Element>(
    props: IUseCodeMirror
): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer = useRef<T>(null);
    const [editorView, setEditorView] = useState<EditorView>();
    const { onChange } = props;

    useEffect(() => {
        if (!refContainer.current) {
            return;
        }

        const startState = EditorState.create({
            doc: props.doc,
            extensions: [
                transparentTheme,
                syntaxHighlighting(mdHighlight),
                bracketMatching(),
                history(),
                highlightActiveLine(),
                highlightActiveLineGutter(),
                drawSelection(),
                EditorState.allowMultipleSelections.of(true),
                closeBrackets(),
                highlightSelectionMatches(),
                lineNumbers(),
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                    addKeymap: true,
                }),
                oneDark,
                keymap.of([
                    ...defaultKeymap,
                    ...historyKeymap,
                    ...closeBracketsKeymap,
                    ...searchKeymap,
                    indentWithTab,
                ]),
                EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                    if (update.changes) {
                        onChange && onChange(update.state);
                    }
                }),
            ],
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
