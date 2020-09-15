// src/avatar/Avatar
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import style from "../../styles/modules/avatar/index.scss";
import classnames from "classnames";
import Container from "../container";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Avatar extends PureComponent {

  static propTypes = {
    left: PropTypes.bool,
    inline: PropTypes.bool
  };

  static defaultProps = {
    left: false,
    inline: true
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {left, inline, children, cssClassNames, ...other} = this.props;
    let classNames = classnames({
      [style.Avatar]: true,
      [style["Avatar--left"]]: left,
      [style["Avatar--inline"]]: inline,
      [cssClassNames]: true
    });
    return (
      <Container className={classNames} {...other}>
        {children}
      </Container>
    )
  }
}

export {default as AvatarImage} from "./AvatarImage";
export {default as AvatarName} from "./AvatarName";
export {default as AvatarText} from "./AvatarText";

