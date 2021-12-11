// src/shape/ShapeCircle
import React, {Component} from "react";
import style from "../../styles/modules/shape/ShapeCircle.scss";
import classnames from "classnames";
import Container from "../container";

export default class ShapeCircle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children, ...other} = this.props;
    return (
      <Container className={style.ShapeCircle} {...other}>
        {children}
      </Container>
    );
  }
}
