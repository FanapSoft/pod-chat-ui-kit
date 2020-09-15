// src/menu/contextmenu
import React, {Component} from "react";
import {MenuItem} from "react-contextmenu";
import style from "../../styles/modules/menu/ContextItem.scss";

export default class ContextItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children, ...other} = this.props;
    return <MenuItem className={style.ContextItem} {...other}>{children}</MenuItem>;
  }
}