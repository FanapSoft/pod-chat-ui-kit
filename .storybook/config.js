import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { configure, addDecorator, setAddon } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.doc\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(JSXAddon);

addDecorator(story => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
));

configure(loadStories, module);
