// src/typography/Heading
import React, {Component} from "react";
import style from "../../styles/modules/typography/Heading.scss";
import classnames from "classnames";

export default class extends Component {

  static defaultProps = {
    invert: false,
    id: null,
    h2: false,
    h3: false,
    h4: false,
    h5: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {h2, h3, h4, h5, id, invert, children} = this.props;
    let classNames = classnames({[style["Heading--invert"]]: invert});
    if (classNames) classNames = ` ${classNames}`;
    classNames = `${style.Heading}${classNames}`;
    if (h2) {
      return <h2 className={classNames} id={id}>{children}</h2>
    }
    if (h3) {
      return <h3 className={classNames} id={id}>{children}</h3>
    }
    if (h4) {
      return <h4 className={classNames} id={id}>{children}</h4>
    }
    if (h5) {
      return <h5 className={classNames} id={id}>{children}</h5>
    }
    return <h1 className={classNames} id={id}>{children}</h1>
  }
}