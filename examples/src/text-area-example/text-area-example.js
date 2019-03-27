import React from 'react';
import { withOnChangeDebounce } from '../../../src/hocs/with-on-change-debounce';

const TextArea = props => <textarea {...props} />;

const TextAreaWithDebounce = withOnChangeDebounce()(TextArea);

export const TextAreaExample = () => {
  const handlerOnChange = e => {
    console.log(e.target.value);
  };
  return <TextAreaWithDebounce onChange={handlerOnChange} />;
};
