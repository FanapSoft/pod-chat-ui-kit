// src/input/InputText
import React, {PureComponent} from "react";
import classnames from "classnames";
import style from "../../styles/modules/input/InputText.scss";
import PropTypes from "prop-types";
import Container from "../container";

export default class InputText extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    max: PropTypes.number
  };

  static defaultProps = {
    value: "",
    max: null,
    className: null,
    inputClassName: null,
    onChange: e => {
    },
    placeholder: null
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.inputRef = React.createRef();
  }

  focus() {
    this.setState({
      focus: true
    });
    this.inputRef.current.focus();
  }

  onFocus() {
    this.setState({
      focus: true
    });
  }

  onBlur() {
    this.setState({
      focus: false
    });
  }

  render() {
    const {value, onChange, placeholder, className, inputClassName, max} = this.props;
    const {focus} = this.state;
    const classNames = classnames({
      [style.InputText]: true,
      [style["InputText--focus"]]: focus,
      [className]: className
    });
    const inputClassNames = classnames({
      [style.InputText__Input]: true,
      [inputClassName]: inputClassName
    });
    return (
      <Container className={classNames}>
        <input className={inputClassNames}
               maxLength={max}
               ref={this.inputRef}
               onChange={onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               value={value}
               placeholder={placeholder}/>
      </Container>
    );
  }
}
