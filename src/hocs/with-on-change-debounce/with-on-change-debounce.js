import React from 'react';
import { noop } from 'lodash';
import { debounceEvent } from '../../helpers/debounce-event';

/* eslint-disable react/prop-types */
export const withOnChangeDebounce = (wait = 500) => WrrapedComponent => ({
  onChange = noop,
  ...props
}) => <WrrapedComponent {...props} onChange={debounceEvent(onChange, wait)} />;
