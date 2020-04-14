# Atomic Styles via React Props for Styled Components

## Installation

```bash
# via npm
npm install --save styled-atomic-props

# via yarn
yarn add styled-atomic-props
```

## Configuration

In your react app's `index.js`:

**!! IMPORTANT !!**: CSS defined as propStyle MUST be terminated with a semicolon! Crucial bug prevention tip!

```jsx
import React from 'react'
import App from './App'

import { addPropStyles } from 'styled-atomic-props'

addPropStyles({
  foo: 'background-color: #BFC9D8;',
  bar: 'color: #586272;',
  baz: 'padding: 1rem;',
  qux: 'border-radius: 0.25rem;',
  quux: 'border: 1px solid #A0ACBF;',
  corge: `
    /* any valid css that works in styled-components */
    ul {
      padding-left: 0;
      list-style: none;
      li {
        &:first-of-type {
          font-size: 110%;
          font-weight: 900;
          text-transform: uppercase;
        }
      }
    }
  `
})

ReactDOM.render(<App />, document.getElementById('root'))
```

Create a styled-component that accepts propStyles:

```jsx
import styled from 'styled-components'
import getPropStyles from 'styled-atomic-props'

export const Div = styled.div`
  ${(props) => {
    return getPropStyles(props)
  }}
`
export default Div
```

Or use any of the core components provided by this package:

```jsx
import {
  Div, // pasted above
  A,
  P,
  Img,
  Label,
  Span,
  Strong,
  Ul,
  Li,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
} from 'styled-atomic-props'
```

## Usage

```jsx
import { Div } from 'styled-atomic-props'

const SomeComponent = (props) => {
  return (
    <Div foo bar baz qux quux corge>
      <ul>
        <li>{'list item'}</li>
        <li>{'list item'}</li>
      </ul>
    </Div>
  )
}
```

# Built-in propStyles

This package comes equipped with preset propStyles that are disabled by default.

To gain access to the built-in propStyles, pass `true` as the second argument to `addPropStyles`:

(you could also pass your favorite curse word or 'default' as a string, it's just a boolean check -- you do you boo)

```jsx
addPropStyles(
  {
    someCustomPropStyle: 'background-color: black;'
  },
  true
)

// const addPropStyles: (userConfig: Object, withDefaults: Boolean) => Void
```

## Previous example using built-in propStyles

> See [propStyles directory](src/styles/propStyles/index.js) for complete set of built-in propStyles

PropStyles can also be passed as styled-components attributes as booleans.

```jsx
import { Div, Ul } from 'styled-atomic-props'

const StyledUl = styled(Ul).attrs({
  listUnstyled: true
})`
  li {
    &:first-of-type {
      font-size: 110%;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
`

const SomeComponent = (props) => {
  return (
    <Div bgGray300 gray600 padding border bcGray400 borderRadius>
      <StyledUl>
        <li>{'list item'}</li>
        <li>{'list item'}</li>
      </StyledUl>
    </Div>
  )
}
```
