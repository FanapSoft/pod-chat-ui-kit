// src/modal/ModalFooter
import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalFooter.scss";
import Container from "../container";

export default class ModalFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className={style.ModalFooter}>
        {this.props.children}
      </Container>
    );
  }
}
