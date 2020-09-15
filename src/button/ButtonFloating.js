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
    position: PropTypes.object
  };

  static defaultProps = {
    disabled: false,
    size: null,
    color: "accent",
    position: {bottom: 0, left: 0}
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {disabled, size, color, position, ...other} = this.props;
    let classNames = classnames({
      [style.Button]: true,
      [style.ButtonFloating]: true,
      [style["Button--disabled"]]: disabled,
      [style["ButtonFloating--sm"]]: (size === "sm"),
      [style[`Button--color${capitalizeFirstLetter(color)}`]]: color
    });
    return (
      <button className={classNames} style={position} {...other}>
        <Container className={style.ButtonFloating__Icon}>
          {this.props.children}
        </Container>
      </button>
    );
  }
}
