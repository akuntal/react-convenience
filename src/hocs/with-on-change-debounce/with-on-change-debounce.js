import React, { useState, useEffect, useCallback } from 'react';
import { noop } from 'lodash';
import { debounceEvent } from '../../helpers/debounce-event';

export const withOnChangeDebounce = (wait = 500) => WrappedComponent => ({
  onChange = noop,
  value,
  ...restProps
}) => {
  const [val, setVal] = useState(value);

  const propogateOnChange = e => onChange(e);

  const debouncedPropogateOnChange = useCallback(
    debounceEvent(propogateOnChange, wait),
    []
  );

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handlerOnChange = e => {
    debouncedPropogateOnChange(e);
    setVal(e.target.value);
  };

  return (
    <WrappedComponent {...restProps} value={val} onChange={handlerOnChange} />
  );
};
