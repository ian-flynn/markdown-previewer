import { useState } from "react";
import Previewer from "./comps/Previewer";
import TextEditor from "./comps/TextEditor";


function App() {
  const initialInput =`A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `;
  const [editorText, setEditorText] = useState(initialInput);
  

  return (
    <div>
      <TextEditor editorText={ editorText } setEditorText={ setEditorText }/>
      <Previewer editorText={ editorText }/>
    </div>
  );
}

export default App;
