// src/list/index.doc
import React from "react";
import { storiesOf } from "@storybook/react";
import { List, ListItem } from ".";

storiesOf('UI/list', module)
  .addWithJSX('List', () => (
    <List/>    
  ))
  .addWithJSX('ListItem', () => (
    <List>
        <ListItem>Fanap</ListItem>
        <ListItem>Coperation</ListItem>
    </List>  
  ));