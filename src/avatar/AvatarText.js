// src/avatar/AvatarText
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarText.scss";
import Container from "../container";

export default class AvatarText extends PureComponent {

  constructor(props) {
    super(props);
  };

  render() {
    let {children} = this.props;
    return (
      <Container className={style.AvatarText}>
          {children}
      </Container>
    );
  }
}