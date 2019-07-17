import React from "react";

import ToolBar from "./toolbar";
import Editor from "./editor";
import Previewer from "./previewer";
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks. 
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markedText: placeholder,
      editorMax:false,
      previewerMax:false,
      icon:["fa fa-compress","fa fa-arrows-alt"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorBarChange = this.handleEditorBarChange.bind(this);
    this.handlePreviewerBarChange = this.handlePreviewerBarChange.bind(this);    
  }
  handleChange(event) {
    this.setState({ markedText: event.target.value });
  }
  handleEditorBarChange(){
    this.setState({editorMax:!this.state.editorMax});    
  }
  handlePreviewerBarChange(){
    this.setState({previewerMax:!this.state.previewerMax});    
  } 

  render() {
    const {markedText,editorMax,previewerMax,icon}=this.state;    
    const iconEditor=editorMax?icon[1]:icon[0];
    const iconPreview=previewerMax?icon[0]:icon[1];
    
    return (
      <div>
        {!this.state.previewerMax&&<ToolBar icon={iconEditor} barEditor={!editorMax} onClick={this.handleEditorBarChange} id="editor"/>}
        {!this.state.previewerMax&&<Editor onChange={this.handleChange} markedText={markedText} editorMax={!editorMax}/>}
        {!this.state.editorMax&&<ToolBar icon={iconPreview} id="previewor" barEditor={previewerMax} onClick={this.handlePreviewerBarChange}/>}
        {!this.state.editorMax&&<Previewer markedText={markedText} previewerMax={previewerMax}/>}
      </div>
    );
  }
}
