import { useState } from "react";
import Previewer from "./comps/Previewer";
import TextEditor from "./comps/TextEditor";


function App() {
  const initialInput =`# Welcome to my React Markdown Previewer!

## Here are some mardown examples for you to try...
  
Heres some code, \`<div></div>\`, between 2 backticks.
  
\`\`\`
// this is multi-line code:
  
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
\`\`\`
  
You can make text **bold**...
Or _italic_.
Or **_both!_**
  
You can try ~~crossing stuff out~~.
  
Here is a [link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (to a cheatsheet), and
> A Block Quote!
  
You can make a table:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

- You can make a list
  - Indentation
     - Changes
        - Things
  
  
1. Make a numbered list
1. The numbers don't matter
1. Imbed an image:
  
![Photo of a beautiful dog](https://www.k9ofmine.com/wp-content/uploads/2018/07/Most-beautiful-dogs.jpg)

### Have Fun!`;
  const [editorText, setEditorText] = useState(initialInput);
  

  return (
    <div>
      <TextEditor editorText={ editorText } setEditorText={ setEditorText }/>
      <Previewer editorText={ editorText }/>
    </div>
  );
}

export default App;
