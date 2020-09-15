// src/avatar/AvatarImage
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarImage.scss";
import Container from "../container";
import {Text} from "../typography";

export default class AvatarImage extends PureComponent {

  static propTypes = {
    src: PropTypes.any,
    size: PropTypes.oneOf(['sm', 'lg', 'xlg']),
    customSize: PropTypes.string,
    text: PropTypes.string,
    textBg: PropTypes.string
  };

  static defaultProps = {
    src: undefined,
    size: null,
    customSize: null,
    text: null,
    textBg: null
  };

  constructor(props) {
    super(props);
  };

  render() {
    let {src, size, customSize, text, textBg, children} = this.props;
    let classNames = classnames({
      [style.AvatarImage]: true,
      [style["AvatarImage--sm"]]: (size === "sm"),
      [style["AvatarImage--lg"]]: (size === "lg"),
      [style["AvatarImage--xlg"]]: (size === "xlg"),
    });
    let inlineStyle = {};
    if (customSize) {
      inlineStyle = {...inlineStyle, ...{width: customSize, height: customSize}};
    }
    return (
      <Container className={classNames} style={inlineStyle} relative>
        {src && <Container relative style={{backgroundImage: `url('${src}')`}} className={style.AvatarImage__Image}/>}
        <Container style={{backgroundColor: textBg}} className={style.AvatarImage__TextContainer}>
          <Container center>
            <Text bold color="gray" light noLineHeight>{text}</Text>
          </Container>
        </Container>
        {children && children}
      </Container>
    );
  }
}
