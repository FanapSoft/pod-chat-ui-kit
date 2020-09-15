// src/content/index
import React, {PureComponent} from "react";
import style from "../../styles/modules/paper/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";

export default class Paper extends PureComponent {

  static propTypes = {
    hasShadow: PropTypes.bool,
    colorBackgroundDark: PropTypes.bool,
    colorBackgroundLight: PropTypes.bool,
    colorBackground: PropTypes.bool
  };

  static defaultProps = {
    hasShadow: false,
    colorBackgroundDark: false,
    colorBackgroundLight: false,
    colorBackground: false
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {colorBackgroundLight, colorBackgroundDark, colorBackground, hasShadow, cssClassNames, ...other} = this.props;
    let classNames = classnames({
      [style.Paper]: true,
      [style["Paper--colorBackgroundLight"]]: colorBackgroundLight,
      [style["Paper--colorBackgroundDark"]]: colorBackgroundDark,
      [style["Paper--colorBackground"]]: colorBackground,
      [style["paper--hasShadow"]]: hasShadow,
      [cssClassNames]: cssClassNames
    });
    return (
      <Container className={classNames} {...other}>
        {this.props.children}
      </Container>
    );
  }
}

export {default as PaperFooter} from "./PaperFooter";