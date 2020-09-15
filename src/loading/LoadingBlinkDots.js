// src/loading/LoadingBlinkDots
import React, {Component} from "react";
import style from "../../styles/modules/loading/LoadingBlinkDots.scss";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";

export default class LoadingBlinkDots extends Component {

  static defaultProps = {
    invert: false,
    size: null
  };

  static propTypes = {
    invert: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg", "xlg"]),
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {invert, size} = this.props;
    let classNames = classnames({
      [style["LoadingBlinkDots--invert"]]: invert,
      [style["LoadingBlinkDots--lg"]]: (size === "xlg"),
      [style["LoadingBlinkDots--xlg"]]: (size === "lg"),
      [style["LoadingBlinkDots--sm"]]: (size === "sm")
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.LoadingBlinkDots}${classNames}`}><span className={style.LoadingBlinkDots__Dot}/><span className={style.LoadingBlinkDots__Dot}/><span className={style.LoadingBlinkDots__Dot}/></Container>
    );
  }
}