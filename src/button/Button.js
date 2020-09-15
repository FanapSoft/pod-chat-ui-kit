import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import style from "../../styles/modules/button/Button.scss";
import classnames from "classnames";
import Loading, {LoadingBlinkDots} from "../loading";
import Container from "../container";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Button extends PureComponent {

  static propTypes = {
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    outlined: PropTypes.bool,
    size: PropTypes.oneOf(["xsm", "sm", "lg", "xlg"]),
    color: PropTypes.oneOf(["accent", "primary", "gray", "white", "green", "red", "yellow"])
  };

  static defaultProps = {
    text: false,
    disabled: false,
    outlined: false,
    size: null,
    color: "accent"
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {onClick, text, disabled, outlined, loading, size, color} = this.props;
    let classNames = classnames({
      [style["Button--text"]]: text,
      [style["Button--disabled"]]: disabled,
      [style["Button--outlined"]]: outlined,
      [style["Button--xlg"]]: (size === "xlg"),
      [style["Button--lg"]]: (size === "lg"),
      [style["Button--sm"]]: (size === "sm"),
      [style["Button--xsm"]]: (size === "xsm"),
    });
    let colorClassNames = "";
    if (color) {
      colorClassNames = ` ${style[`Button--color${capitalizeFirstLetter(color)}`]}`;
    }
    if (loading) {
      return (
        <button className={`${style.Button} ${classNames} ${colorClassNames}`}
                onClick={loading || disabled ? null : onClick}>
          <Container centerTextAlign>
            <Loading><LoadingBlinkDots size="sm"/></Loading>
          </Container>
        </button>
      );
    }
    return (
      <button className={`${style.Button} ${classNames && classNames} ${colorClassNames}`}
              onClick={loading || disabled ? null : onClick}>
        {loading ? "" : this.props.children}
      </button>
    );
  }
}
