// src/avatar/AvatarName
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarName.scss";
import Container from "../container";

export default class AvatarName extends PureComponent {

  static propTypes = {
    invert: PropTypes.bool,
    bottom: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg", "xlg"]),
    fontWeight: PropTypes.oneOf(["normal", "bold"])
  };

  static defaultProps = {
    invert: false,
    fontWeight: "bold",
    bottom: false,
    size: null
  };

  constructor(props) {
    super(props);
  };

  render() {
    let {size, invert, bottom, children, fontWeight, ...other} = this.props;
    let classNames = classnames({
      [style["AvatarName--invert"]]: invert,
      [style["AvatarName--bottom"]]: bottom,
      [style["AvatarName--sm"]]: (size === "sm"),
      [style["AvatarName--lg"]]: (size === "lg"),
      [style["AvatarName--xlg"]]: (size === "xlg"),
      [style["AvatarName--fontWeightNormal"]]: (fontWeight === "normal")
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.AvatarName} ${classNames}`} {...other}>{children}</Container>
    );
  }
}