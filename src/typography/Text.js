// src/typography/Text
import React, {Component} from "react";
import sanitizeHtml from "sanitize-html";
import style from "../../styles/modules/typography/Text.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class extends Component {

  static propTypes = {
    invert: PropTypes.bool,
    inline: PropTypes.bool,
    italic: PropTypes.bool,
    noLineHeight: PropTypes.bool,
    isHTML: PropTypes.bool,
    sanitizeRule: PropTypes.object,
    link: PropTypes.string,
    linkStyle: PropTypes.bool,
    linkClearStyle: PropTypes.bool,
    bold: PropTypes.bool,
    wordWrap: PropTypes.oneOf(["breakWord", "breakSpaces"]),
    whiteSpace: PropTypes.oneOf(["pre", "preWrap", "noWrap"]),
    overflow: PropTypes.oneOf(["ellipsis"]),
    size: PropTypes.oneOf(["xs", "sm", "lg", "xlg"]),
    color: PropTypes.oneOf(["gray", "accent", "green", "yellow", "text", "red"]),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    target: PropTypes.string
  };

  static defaultProps = {
    invert: false,
    inline: false,
    italic: false,
    bold: false,
    noLineHeight: false,
    isHTML: false,
    sanitizeRule: null,
    wordWrap: null,
    whiteSpace: null,
    overflow: null,
    dark: false,
    light: false,
    link: null,
    linkStyle: false,
    linkClearStyle: false,
    color: null,
    size: null,
    target: null
  };

  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  render() {
    const {className, invert, inline, italic, bold, isHTML, wordWrap, size, children, link, linkStyle, linkClearStyle, target, color, dark, light, overflow, whiteSpace, noLineHeight, sanitizeRule, ...other} = this.props;
    let colorClassNames = "";
    if (color) {
      colorClassNames = `Text--color${capitalizeFirstLetter(color)}`;
      if (dark || light) {
        colorClassNames += light ? "Light" : "Dark";
      }
    }
    let classNames = classnames({
      [style.Text]: true,
      [style["Text--noLineHeight"]]: noLineHeight,
      [style["Text--link"]]: link || linkStyle,
      [style["Text--linkClearStyle"]]: linkClearStyle,
      [style[colorClassNames]]: colorClassNames,
      [style["Text--invert"]]: invert,
      [style["Text--inline"]]: inline,
      [style["Text--bold"]]: bold,
      [style["Text--italic"]]: italic,
      [style["Text--wordWrapBreakWord"]]: (wordWrap === "breakWord"),
      [style["Text--wordWrapBreakSpaces"]]: (wordWrap === "breakSpaces"),
      [style["Text--whiteSpacePreWrap"]]: (whiteSpace === "preWrap"),
      [style["Text--whiteSpacePre"]]: (whiteSpace === "pre"),
      [style["Text--whiteSpaceNoWrap"]]: (whiteSpace === "noWrap"),
      [style["Text--overflowEllipsis"]]: (overflow === "ellipsis"),
      [style["Text--xs"]]: (size === "xs"),
      [style["Text--sm"]]: (size === "sm"),
      [style["Text--lg"]]: (size === "lg"),
      [style["Text--xlg"]]: (size === "xlg"),
      [className]: className
    });
    if (link) {
      return <a href={link} className={classNames} target={target} {...other}>{children}</a>
    }
    if (isHTML) {
      return <p className={classNames} {...other}
                dangerouslySetInnerHTML={{__html: sanitizeRule ? sanitizeHtml(children, sanitizeRule) : children}}/>
    }
    return <p className={classNames} {...other}>{children}</p>
  }
}