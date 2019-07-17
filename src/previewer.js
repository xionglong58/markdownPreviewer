import React from "react";
import './previewer.css';
import marked from 'marked';
const Previewer=(props)=>{
    const idname=props.previewerMax?"previewer1":"previewer"
    return(
        <div id={idname} dangerouslySetInnerHTML={{__html: marked(props.markedText)}}>
        </div>
    )
}
export default Previewer;