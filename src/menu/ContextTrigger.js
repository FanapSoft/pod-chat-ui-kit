// src/menu/contextmenu
import React, {Component} from "react";
import {ContextMenuTrigger} from "react-contextmenu";

export default class ContextTrigger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children, contextTriggerRef, id, ...other} = this.props;
    return <ContextMenuTrigger id={`${id}`} ref={contextTriggerRef} {...other}>{children}</ContextMenuTrigger>;
  }
}