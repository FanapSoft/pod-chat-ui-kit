// src/menu/contextmenu
import React, {Component} from "react";
import {ContextMenu, hideMenu, showMenu} from "react-contextmenu";
import style from "../../styles/modules/menu/Context.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Context extends Component {

  static propTypes = {
    contextRef: PropTypes.object,
    stickyHeader: PropTypes.bool
  };

  static defaultProps = {
    contextRef: null,
    stickyHeader: false

  };

  constructor(props) {
    super(props);
  }

  render() {
    const {contextRef, stickyHeader, children, id, ...other} = this.props;
    let classNames = classnames({
      [style.Context]: true,
      [style["Context--stickyHeader"]]: stickyHeader
    });
    return <ContextMenu id={`${id}`} className={classNames} ref={contextRef} {...other}>{children}</ContextMenu>;
  }
}
export {default as ContextItem} from "./ContextItem";
export {default as ContextTrigger} from "./ContextTrigger";