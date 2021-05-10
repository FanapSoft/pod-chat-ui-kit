import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import style from "../../styles/modules/button/ButtonFloating.scss";
import classnames from "classnames";
import Container from "../container";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class ButtonFloating extends PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm"]),
    color: PropTypes.oneOf(["accent", "primary", "gray", "white", "green", "red", "yellow"]),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    position: PropTypes.object
  };

  static defaultProps = {
    disabled: false,
    size: null,
    color: "accent",
    position: {bottom: 0, left: 0},
    dark: false,
    light: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {disabled, size, color, position, dark, light, children, className, ...other} = this.props;
    let colorClassNames = "";
    if (color) {
      colorClassNames = `Button--color${capitalizeFirstLetter(color)}`;
      if (dark || light) {
        colorClassNames += light ? "Light" : "Dark";
      }
    }
    const classNames = classnames({
      [style.Button]: true,
      [style.ButtonFloating]: true,
      [style[colorClassNames]]: colorClassNames,
      [style["Button--disabled"]]: disabled,
      [style["ButtonFloating--sm"]]: (size === "sm"),
      [style[`Button--color${capitalizeFirstLetter(color)}`]]: color,
      [className]: className
    });
    return (
      <button className={classNames} style={position} {...other}>
        <Container className={style.ButtonFloating__Icon}>
          {children}
        </Container>
      </button>
    );
  }
}
