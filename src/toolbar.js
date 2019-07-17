import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./bar.css";
// const props=['fa fa-compress','fa fa-arrows-alt']
const ToolBar = props => {
  if (props.id === "editor") {
    const classname = props.barEditor ? "bar" : "bar1";
    return (
      <div className={classname}>
        <i className="fa fa-fire" />
        编辑界面
        <i className={props.icon} onClick={props.onClick} />
      </div>
    );
  } else if(props.id==="previewor"){
    const classname = props.barEditor ? "bar3" : "bar2";
    return (
      <div className={classname}>
        <i className="fa fa-fire" />
        显示界面
        <i className={props.icon} onClick={props.onClick} />
      </div>
    );
  }
};
export default ToolBar;
