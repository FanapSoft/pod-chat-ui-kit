// src/loading/index
import React, {Component} from "react";
import classnames from "classnames";
import Container from "../container";
import style from "../../styles/modules/loading/index.scss";

export default class Loading extends Component {

  static defaultProps = {
    hasSpace: false,
    inline: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {hasSpace, children, inline} = this.props;
    let classNames = classnames({
      [style.Loading]: true,
      [style["Loading--hasSpace"]]: hasSpace
    });
    return (
      <Container className={classNames} inline={inline}>
        {children}
      </Container>
    )
  }
}

export {default as LoadingBlinkDots} from "./LoadingBlinkDots";
export {default as LoadingSpinner} from "./LoadingSpinner";
