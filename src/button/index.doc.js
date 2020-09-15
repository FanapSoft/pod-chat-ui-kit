// src/avatar/index.doc
import React from "react";
import { storiesOf } from "@storybook/react";
import style from "../../styles/document.scss";
import { Button } from ".";

storiesOf('UI/button', module)
  .addWithJSX('Colorfull Botton', () => (
    <div>
      <Button text outlined>ورود به پنل فناپ</Button>
      <Button loading/>
      <Button disabled/>
      <Button jumbo/>
      <Button text size="xsm">ورود به پنل فناپ</Button>
      <Button text size="sm">ورود به پنل فناپ</Button>
      <Button text size="lg">ورود به پنل فناپ</Button>
      <Button text size="xlg">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="accent">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="accent" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="accent" light>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="primary">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="primary" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="primary" light>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="gray">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="gray" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="gray" light>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="white">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="red">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="red" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="red" light>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="green">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="green" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="green" light>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="yellow">ورود به پنل فناپ</Button>
      <Button text size="xlg" color="yellow" dark>ورود به پنل فناپ</Button>
      <Button text size="xlg" color="yellow" light>ورود به پنل فناپ</Button>
    </div>
  ));