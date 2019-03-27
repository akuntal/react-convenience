# react-convenience

React Utilities.

# installation

Run `yarn add react-convenience`

## Usages

### debounceEvent

It delays execution of function, takes 2 argument first is callback and second is delay time.

```
    import { debounceEvent } from 'react-convenience';
    import { TextArea } from '...';

    const handlerOnChange = e => console.log(e);

    const debouncedHandler = debounceEvent(handlerOnChange, 500);

    <TextArea onChange={debouncedHandler} />

```

### withOnChangeDebounce

HOC to help debounce handler `onChange`

```
    import { withOnChangeDebounce } from 'react-convenience';
    import { TextArea } from '...';

    const TextAreaWithDebounce = withOnChangeDebounce(500)(TextArea);

    const handlerOnChange = e => console.log(e);

    <TextAreaWithDebounce onChange={handlerOnChange} />

```
