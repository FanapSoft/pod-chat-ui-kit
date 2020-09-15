// src/modal/ModalBody
import React, {Component} from "react";
import Scroller from "../scroller";
import style from "../../styles/modules/modal/ModalBody.scss";

export default class ModalBody extends Component {

  constructor(props) {
    super(props);
    this.scroller = React.createRef();
  }

  render() {
    const {children, ...other} = this.props;
    return (
      <Scroller className={style.ModalBody} {...other} ref={this.scroller}>
        {children}
      </Scroller>
    );
  }
}
