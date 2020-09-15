// src/modal/index
import React, {Component} from "react";
import Container from "../container";
import style from "../../styles/modules/modal/index.scss";
import PropTypes from "prop-types";
import classnames from "classnames";


export default class extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    inContainer: PropTypes.bool,
    fullScreen: PropTypes.bool,
    wrapContent: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false,
    inContainer: false,
    fullScreen: false,
    wrapContent: false
  };

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    const {isOpen, onClose} = this.props;
    if (onClose) {
      if (isOpen) {
        onClose();
      }
    }
  }

  render() {
    const {isOpen, inContainer, fullScreen, wrapContent, ...other} = this.props;
    const classNames = classnames({
      [style.Modal]: true,
      [style["Modal--inContainer"]]: inContainer,
      [style["Modal--fullScreen"]]: fullScreen
    });

    const classNamesModalContent = classnames({
      [style.Modal__Content]: true,
      [style["Modal__Content--wrapContent"]]: wrapContent
    });
    return isOpen ?
      <Container className={classNames} ref={this.container} {...other}>
        <Container className={style.Modal__Overlay} onClick={this.handleClickOutside}/>
        <Container className={classNamesModalContent}>
          {this.props.children}
        </Container>
      </Container>
      : ""
  }
}

export {default as ModalBody} from "./ModalBody";
export {default as ModalHeader} from "./ModalHeader";
export {default as ModalFooter} from "./ModalFooter";
export {default as ModalMedia} from "./ModalMedia";