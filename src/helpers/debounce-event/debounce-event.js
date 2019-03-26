import { debounce } from 'lodash';

export const debounceEvent = (...args) => {
  const debouncedEvent = debounce(...args);

  return (e, ...restArgs) => {
    e.persist();
    return debouncedEvent(e, ...restArgs);
  };
};
