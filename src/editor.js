import React from 'react';
import "./editor.css"
const Editor=(props)=>{
    const {onChange,markedText}=props;
    const editorClassName=props.editorMax?'editor':'editor1';
    return (
        <textarea type='text' className={editorClassName} onChange={onChange} value={markedText} ></textarea>
    );
}
export default Editor;
