// src/gap/index
import React, {PureComponent} from "react";
import style from "../../styles/modules/gap/index.scss";
import classnames from "classnames";
import PropTypes from 'prop-types';

export default class Gap extends PureComponent {

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    block: PropTypes.bool,
    unit: PropTypes.string,
  };

  static defaultProps = {
    x: 0,
    y: 0,
    block: false,
    unit: "px"
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {x, y, unit, block} = this.props;
    let inlineStyle = {};
    inlineStyle.padding = `${y}${unit} ${x}${unit}`;
    let classNames = classnames({
      [style["Gap--block"]]: block,
    });
    if (classNames) classNames = ` ${classNames}`;
    classNames = `${style.Gap}${classNames}`;
    return (
      <span className={classNames} style={inlineStyle}>
        {this.props.children}
      </span>
    );
  }
}
