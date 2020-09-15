// src/modal/ModalHeader
import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalHeader.scss";
import Container from "../container";

export default class ModalHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className={style.ModalHeader}>
        {this.props.children}
      </Container>
    );
  }
}
