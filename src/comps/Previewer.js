import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Previewer = ({ editorText }) => {

    return (
        <div>
            Previewer
            <div id="preview">
                <ReactMarkdown children={ editorText } remarkPlugins={[ remarkGfm ]} />
            </div>


        </div>
    )
}

export default Previewer;