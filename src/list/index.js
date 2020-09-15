// src/list/index
import React, {Component} from "react";
import style from "../../styles/modules/list/index.scss";

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={style.List}>
        {this.props.children}
      </ul>
    );
  }
}

export { default as ListItem } from "./ListItem";