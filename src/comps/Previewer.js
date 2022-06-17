import React from "react";
import ReactMarkdown from "react-markdown";

const Previewer = ({ editorText }) => {

    return (
        <div>
            Previewer
            <div id="preview">
                <ReactMarkdown>{editorText}</ReactMarkdown>
            </div>


        </div>
    )
}

export default Previewer;