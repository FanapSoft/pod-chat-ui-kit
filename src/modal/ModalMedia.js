// src/modal/ModalBody
import React, {Component} from "react";
import "../../styles/modules/modal/ModalMedia.scss";
import $ from "jquery";

export default class ModalMedia extends Component {

  constructor(props) {
    super(props);
    require("fancybox-scopial")(window, window.document, $);
    this.close = this.close.bind(this);
  }

  close() {
    $.fancybox.close();
  }

  componentDidMount() {
    this.modalMedia = $().fancybox({ ...this.props});
  }

  getFancyBox() {
    return $.fancybox;
  }

  render() {
    return null;
  }
}