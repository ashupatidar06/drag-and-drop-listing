import React, { useState } from 'react';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const handleContentStateChange = (contentState: any) => {
    console.log('Content State:', convertToRaw(contentState));
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={handleEditorChange}
        onContentStateChange={handleContentStateChange}
      />
    </div>
  );
};

export default RichTextEditor;
    