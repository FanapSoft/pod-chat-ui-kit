// src/loading/Dropdown
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Container from "../container";
import List from "../list/index";
import style from "../../styles/modules/menu/Dropdown.scss";

export default class Dropdown extends Component {

  static defaultProps = {
    isOpen: false,
    onClose: e => {
    }
  };

  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  handleClickOutside(event) {
    const current = this.container.current;
    const node = ReactDOM.findDOMNode(current);
    const {isOpen, onClose} = this.props;
    if (onClose) {
      if (node && !node.contains(event.target)) {
        if (isOpen) {
          onClose();
        }
      }
    }
  }

  render() {
    const {isOpen} = this.props;
    return isOpen ?
      <Container className={style.Dropdown} ref={this.container}>
        <List>
          {this.props.children}
        </List>
      </Container>
      : ""
  }
}

export {default as DropdownItem} from "./DropdownItem";
