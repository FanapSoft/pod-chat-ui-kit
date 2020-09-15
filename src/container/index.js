import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import style from "../../styles/modules/container/index.scss"
import classnames from "classnames";

function capitalizeFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Container extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    maxWidth: PropTypes.string,
    minWidth: PropTypes.string,
    display: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    flex: PropTypes.string,
    inline: PropTypes.bool,
    leftTextAlign: PropTypes.bool,
    centerTextAlign: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    relative: PropTypes.bool,
    absolute: PropTypes.bool,
    inSpace: PropTypes.bool,
    outSpace: PropTypes.bool,
    className: PropTypes.string,
    centerLeft: PropTypes.bool,
    centerRight: PropTypes.bool,
    center: PropTypes.bool,
    bottomRight: PropTypes.bool,
    bottomLeft: PropTypes.bool,
    bottomCenter: PropTypes.bool,
    topRight: PropTypes.bool,
    topLeft: PropTypes.bool,
    topCenter: PropTypes.bool,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    userSelect: PropTypes.oneOf(["none", "text", "all"]),
    cursor: PropTypes.oneOf(["pointer", "text"]),
  };

  static defaultProps = {
    id: "",
    maxWidth: null,
    minWidth: null,
    inline: false,
    leftTextAlign: false,
    centerTextAlign: false,
    display: null,
    flex: null,
    alignItems: null,
    alignContent: null,
    left: false,
    right: false,
    relative: false,
    absolute: false,
    inSpace: false,
    outSpace: false,
    className: null,
    //Positions
    centerLeft: false,
    centerRight: false,
    center: false,
    bottomRight: false,
    bottomLeft: false,
    bottomCenter: false,
    topRight: false,
    topLeft: false,
    topCenter: false,
    userSelect: null,
    cursor: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      maxWidth,
      minWidth,
      inline,
      leftTextAlign,
      centerTextAlign,
      left,
      right,
      relative,
      absolute,
      inSpace,
      outSpace,
      className,
      centerLeft,
      centerRight,
      center,
      bottomRight,
      bottomLeft,
      bottomCenter,
      topRight,
      topLeft,
      topCenter,
      userSelect,
      cursor,
      display,
      flex,
      alignItems,
      alignContent,
      ...other
    } = this.props;
    let classNames = classnames({
      [style.Container]: true,
      [style["Container--maxWidth"]]: maxWidth,
      [style["Container--minWidth"]]: minWidth,
      [style["Container--inline"]]: inline,
      [style["Container--leftTextAlign"]]: leftTextAlign,
      [style["Container--centerTextAlign"]]: centerTextAlign,
      [style["Container--left"]]: left,
      [style["Container--right"]]: right,
      [style["Container--relative"]]: relative,
      [style["Container--absolute"]]: absolute,
      [style["Container--inSpace"]]: inSpace,
      [style["Container--outSpace"]]: outSpace,
      [style["Container--centerLeft"]]: centerLeft,
      [style["Container--centerRight"]]: centerRight,
      [style["Container--center"]]: center,
      [style["Container--bottomRight"]]: bottomRight,
      [style["Container--bottomLeft"]]: bottomLeft,
      [style["Container--bottomCenter"]]: bottomCenter,
      [style["Container--topRight"]]: topRight,
      [style["Container--topLeft"]]: topLeft,
      [style["Container--topCenter"]]: topCenter,
      [style[`Container--userSelect${capitalizeFirstLetter(userSelect)}`]]: userSelect,
      [style[`Container--cursor${capitalizeFirstLetter(cursor)}`]]: cursor,
      [className]: className
    });
    return (
      <div id={id} className={classNames}
           style={{maxWidth, minWidth, display, flex, alignItems, alignContent}} {...other}>
        {this.props.children}
      </div>
    );
  }
}
