// src/divider/index
import React, {Component} from "react";
import style from "../../styles/modules/divider/index.scss";
import classnames from "classnames";
import Container from "../container";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Divider extends Component {

  static defaultProps = {
    thick: 1,
    unit: false,
    shadowInset: false,
    color: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {thick, unit, color, shadowInset, dark, light} = this.props;
    let inlineStyle = {};
    inlineStyle.padding = `${thick || 1}${unit || "px"} 0`;
    let colorClassNames = "";
    if (color) {
      colorClassNames = `Divider--color${capitalizeFirstLetter(color)}`;
      if (dark || light) {
        colorClassNames += light ? "Light" : "Dark";
      }
    }
    let classNames = classnames({
      [style.Divider]: true,
      [style[colorClassNames]]: colorClassNames,
      [style["Divider--shadowInset"]]: shadowInset,
    });
    return (
      <Container className={classNames} style={inlineStyle}>
        {this.props.children}
      </Container>
    );
  }
}