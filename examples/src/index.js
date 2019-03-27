import React from 'react';
import { render } from 'react-dom';
import { TextAreaExample } from './text-area-example';

const App = () => (
  <div>
    withOnChangeDebounce
    <TextAreaExample />
  </div>
);

render(<App />, document.getElementById('root'));
