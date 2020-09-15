// src/shape/index
import React, {Component} from "react";
import style from "../../styles/modules/shape/index.scss";
import classnames from "classnames";
import Container from "../container";

export default class Shape extends Component {

  static defaultProps = {
    size: null,
    color: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {color, size, ...other} = this.props;
    let classNames = classnames({
      [style["Shape--colorAccent"]]: color === "accent",
      [style["Shape--colorPrimary"]]: color === "primary",
      [style["Shape--colorGray"]]: color === "gray",
      [style["Shape--sm"]]: size === "sm",
      [style["Shape--lg"]]: size === "lg",
      [style["Shape--xlg"]]: size === "xlg"
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.Shape}${classNames}`} {...other}>
        {this.props.children}
      </Container>
    );
  }
}

export {default as ShapeCircle} from "./ShapeCircle";