# @akuntal/react-utilities

React Utilities.

# installation

Run `yarn add @akuntal/react-utilities`

## Usages

### debounceEvent

It delays execution of function, takes 2 argument first is callback and second is delay time.

`import { debounceEvent } from '@akuntal/react-utilities';`

`import { TextArea } from '...';`

`const handlerOnChange = e => console.log(e);`

`<TextArea onChange={debounceEvent(handlerOnChange, 500)} />`

### withOnChangeDebounce

`import { withOnChangeDebounce } from '@akuntal/react-utilities';`

`import { TextArea } from '...';`

`const TextAreaWithDebounce = withOnChangeDebounce(500)(TextArea);`

`const handlerOnChange = e => console.log(e);`

`<TextAreaWithDebounce onChange={handlerOnChange} />`
