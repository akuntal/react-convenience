# react-convenience

React Utilities.

# installation

Run `yarn add react-convenience`

## Usages

### debounceEvent

It delays execution of function, takes 2 argument first is callback and second is delay time.

`import { debounceEvent } from 'react-convenience';`

`import { TextArea } from '...';`

`const handlerOnChange = e => console.log(e);`

`<TextArea onChange={debounceEvent(handlerOnChange, 500)} />`

### withOnChangeDebounce

`import { withOnChangeDebounce } from 'react-convenience';`

`import { TextArea } from '...';`

`const TextAreaWithDebounce = withOnChangeDebounce(500)(TextArea);`

`const handlerOnChange = e => console.log(e);`

`<TextAreaWithDebounce onChange={handlerOnChange} />`
