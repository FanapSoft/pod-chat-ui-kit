// src/avatar/index.doc
import React from "react";
import { storiesOf } from "@storybook/react";
import style from "../../styles/document.scss";
import { Avatar, AvatarName, AvatarImage, AvatarText } from ".";

// Mock
const img = "https://avatars0.githubusercontent.com/u/1410429?s=460&v=4";

storiesOf('UI/avatar', module)
  .addWithJSX('Avatar', () => (
    <div>
      <Avatar />
      <Avatar left />
    </div>
  ))
  .addWithJSX('AvatarName', () => (
    <div>
      <AvatarName invert />
      <AvatarName invert bottom />
      <AvatarName invert bottom size="sm" />
      <AvatarName invert bottom size="lg" />
      <AvatarName invert bottom size="xlg" />
    </div>
  ))
  .addWithJSX('AvatarImage', () => (
    <div>
      <div className={style.Document__Title}>Default</div>
      <AvatarImage src={img} />
      <div className={style.Document__Title}>Small</div>
      <AvatarImage src={img} size="sm" />
      <div className={style.Document__Title}>Large</div>
      <AvatarImage src={img} size="lg" />
      <div className={style.Document__Title}>ExtraLarge</div>
      <AvatarImage src={img} size="xlg" />
    </div>
  ))  
  .addWithJSX('AvatarText', () => (
    <AvatarText>
      <h3> raduikit </h3>
    </AvatarText>
  ));
