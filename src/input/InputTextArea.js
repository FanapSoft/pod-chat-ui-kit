// src/input/InputText
import React, {PureComponent} from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";
import {Text} from "../typography";
import Gap from "../gap";
import style from "../../styles/modules/input/InputTextArea.scss";

export default class InputTextArea extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    sanitizeRule: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func
  };

  static defaultProps = {
    value: null,
    sanitizeRule: null,
    className: null,
    inputClassName: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onChange: e => {
    },
    placeholder: null
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.lastCarretPosition = 0;
    this.onBlur = this.onBlur.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.contentEditable = React.createRef();
  }

  componentDidMount() {
    const elem = this.contentEditable.current;
    elem.addEventListener("paste", function(e) {
      e.preventDefault();
      var text = e.clipboardData.getData("text/plain");
      document.execCommand("insertHTML", false, text);
    });
  }

  focus() {
    this.setState({
      focus: true,
    });
    const elem = this.contentEditable.current;
    elem.focus();
    const range = document.createRange();
    range.selectNodeContents(elem);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  sanitize(initValue) {
    const {value, sanitizeRule} = this.props;
    return sanitizeHtml(initValue || value, sanitizeRule);
  }


  getCaretPosition() {
    const element = this.contentEditable.current;
    const range = window.getSelection().getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    const {childNodes} = preCaretRange.cloneContents();
    let cursorPoint = 0;
    function recurFindNodeLength(childNodes) {
      for (const child of childNodes) {
        if (child.nodeType === 1) {
          if(child.childNodes) {
            recurFindNodeLength(child.childNodes);
          }
          cursorPoint += child.outerHTML.length;
        } else if (child.nodeType === 3) {
          cursorPoint += child.textContent.length;
        }
      }
    }
    recurFindNodeLength(childNodes);
    return cursorPoint;
  }

  getLastCaretPosition() {
    return this.lastCarretPosition;
  }

  onBlur(e) {
    const {onChange} = this.props;
    this.lastCarretPosition = this.getCaretPosition();
    let html = e.target.innerHTML;
    if (!html) {
      html = "";
    } else {
      html = html.trim();
      if (html === "<br>") {
        html = "";
      } else {
        html = this.sanitize(e.target.innerHTML);
      }
    }
    if (onChange) {
      onChange(html, true);
    }
  }

  onInput(evt) {
    const {onChange} = this.props;
    if (onChange) {
      onChange(evt.target.value);
    }
  }

  onFocus(evt) {
    const {onFocus} = this.props;
    if (onFocus) {
      onFocus(evt.target);
    }
  }

  render() {
    const {value, placeholder, className, inputClassName, onKeyPress, onKeyDown, onKeyUp} = this.props;
    const {focus} = this.state;
    const hasValue = value && value.trim();
    const classNames = classnames({
      [style.InputTextArea]: true,
      [style["InputTextArea--focus"]]: focus,
      [className]: className
    });
    const inputClassNames = classnames({
      [style.InputTextArea__Input]: true,
      [inputClassName]: true,
      [className]: className
    });
    return (
      <Container className={classNames} relative={!className}>
        {!hasValue &&
        <Container centerRight>
          <Gap x={15}>
            <Text size="sm">{placeholder}</Text>
          </Gap>
        </Container>
        }
        <ContentEditable
          onFocus={this.onFocus}
          innerRef={this.contentEditable}
          className={inputClassNames}
          tagName="pre"
          html={value || ""}
          onBlur={this.onBlur}
          onChange={this.onInput}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      </Container>
    );
  }
}
