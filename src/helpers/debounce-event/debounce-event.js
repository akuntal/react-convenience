import { debounce } from 'lodash';

export const debounceEvent = (...args) => {
  const debouncedEvent = debounce(...args);

  return (e) => {
    e.persist();
    return debouncedEvent(e);
  };
};
