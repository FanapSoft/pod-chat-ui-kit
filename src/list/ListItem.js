// src/list/ListItem
import React, {Component} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/list/ListItem.scss";
import {MdCheck} from "react-icons/md";
import Container from "../container";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ListItem extends Component {

  static propTypes = {
    selection: PropTypes.bool,
    noPadding: PropTypes.bool,
    multiple: PropTypes.bool,
    invert: PropTypes.bool,
    active: PropTypes.bool,
    activeWithTick: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeSelect: PropTypes.func,
    activeColor: PropTypes.oneOf(["gray", "accent"]),
    activeColorDark: PropTypes.bool,
    activeColorLight: PropTypes.bool,
  };

  static defaultProps = {
    selection: false,
    multiple: false,
    noPadding: false,
    invert: false,
    active: false,
    activeWithTick: false,
    activeColor: null,
    activeColorLight: false,
    activeColorDark: false,
    onSelect: e => {
    },
    onDeSelect: e => {
    },
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (e.nativeEvent.which === 3) {
      return;
    }
    const {multiple, active, onSelect, onDeselect} = this.props;
    if (onDeselect) {
      if (multiple) {
        if (active) {
          return onDeselect(e);
        }
      }
    }
    if (onSelect) {
      onSelect(e);
    }
  }

  render() {
    const {selection, active, activeWithTick, invert, children, activeColor, activeColorLight, activeColorDark, noPadding} = this.props;
    let activeColorClassNames = "";
    if (activeColor) {
      activeColorClassNames = `ListItem--activeColor${capitalizeFirstLetter(activeColor)}`;
      if (activeColorLight || activeColorDark) {
        activeColorClassNames += activeColorLight ? "Light" : "Dark";
      }
    }
    let classNames = classnames({
      [style.ListItem]: true,
      [style[activeColorClassNames]]: active && activeColorClassNames,
      [style["ListItem--noPadding"]]: noPadding,
      [style["ListItem--selection"]]: selection,
      [style["ListItem--active"]]: active,
      [style["ListItem--invert"]]: invert,
    });
    return (
      <li className={classNames} onMouseDown={this.onClick}>
        {children}
        {activeWithTick && active ?
          <Container centerLeft>
            <MdCheck className={style.ListItem__Tick} size={28}/>
          </Container> : ""
        }
      </li>
    );
  }
}

export default ListItem;