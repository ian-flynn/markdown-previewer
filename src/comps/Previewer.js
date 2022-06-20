import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Previewer = ({ editorText }) => {

    return (
        <div>
            Previewer
            <div id="preview">
                <ReactMarkdown children={ editorText } remarkPlugins={[ remarkGfm ]}></ReactMarkdown>
            </div>


        </div>
    )
}

export default Previewer;