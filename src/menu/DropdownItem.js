// src/loading/DropdownItem
import React, {Component} from "react";
import style from "../../styles/modules/menu/DropdownItem.scss";
import ListItem from "../list/ListItem";
import Container from "../container";

export default class DropdownItem extends Component {

  static defaultProps = {
    invert: false,
    onSelect: e => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {onSelect, children, invert} = this.props;
    return (
      <ListItem selection invert={invert} onSelect={onSelect}>
        <Container className={style.DropdownItem}>{children}</Container>
      </ListItem>
    );
  }
}