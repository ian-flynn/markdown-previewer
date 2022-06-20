import React, { useState } from "react";

const TextEditor = ({editorText, setEditorText,}) => {
    function handleChange(e) {
        setEditorText(e.target.value);
    }
    return (
        <div className="wrapper-box">
            <div className="box-title">Editor</div>
            <textarea id="editor" type="text" onChange={handleChange} value={editorText}/>
        </div>
    )
}
export default TextEditor;
