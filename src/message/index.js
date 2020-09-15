// src/message/index
import React, {Component} from "react";
import style from "../../styles/modules/message/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";

export default class Message extends Component {

  static defaultProps = {
    size: PropTypes.oneOf(["sm", "lg", "xlg"]),
    invert: false,
    src: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {size, invert, warn, success, error} = this.props;
    let classNames = classnames({
      [style["Message--xlg"]]: (size === "xlg"),
      [style["Message--lg"]]: (size === "lg"),
      [style["Message--sm"]]: (size === "sm"),
      [style["Message--xsm"]]: (size === "xsm"),
      [style["Message--invert"]]: invert,
      [style["Message--warn"]]: warn,
      [style["Message--success"]]: success,
      [style["Message--error"]]: error
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.Message}${classNames}`}>
        {this.props.children}
      </Container>
    );
  }
}