// src/list/index
import React, {Component} from "react";
import style from "../../styles/modules/image/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";

export default class Image extends Component {

  static propTypes = {
    circular: PropTypes.bool,
    setOnBackground: PropTypes.bool,
    alt: PropTypes.string,
  };

  static defaultProps = {
    circular: false,
    setOnBackground: false,
    alt: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {circular, alt, setOnBackground, className, src, ...other} = this.props;
    let classNames = classnames({
      [style.Image]: true,
      [style["Image--circular"]]: circular
    });
    classNames = `${classNames} `;
    if (setOnBackground) {
      return <Container className={className} style={{backgroundImage: `url(${src})`}}/>
    }
    return (
      <img className={`${classNames}${className || ""}`} alt={alt} src={src} {...other}>
        {this.props.children}
      </img>
    );
  }
}