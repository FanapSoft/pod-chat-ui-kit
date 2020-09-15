// src/loading/LoadingSpinner
import React, {Component} from "react";
import style from "../../styles/modules/loading/LoadingSpinner.scss";
import Container from "../container";

export default class LoadingSpinner extends Component {

  constructor() {
    super();
  }

  render() {
    return  <Container className={style.LoadingSpinner}> </Container>;
  }
}