import React, { useState } from "react";

const TextEditor = ({editorText, setEditorText}) => {
    function handleChange(e) {
        setEditorText(e.target.value);
    }
    return (
        <div className="editor-box">
            <div>text editor - h1 h2 link inlinecode codeblock listitem blockquote image boldedtext</div>
             <textarea id="editor" onChange={handleChange} placeholder={editorText}/>
        </div>
    )
}
export default TextEditor;
