# Minimal eslint plugin

## Install

```bash
npm i -D eslint-plugin-demoforfix
```

Then add to `.eslintrc`

```json
{
    "rules": {
        "demoforfix/no-string-classname": 2
    },
    "plugins": [
        "demoforfix"
    ],
}
```
And you wil recive error if try to use literall class name

## INVALID

```javascript
import React, { PureComponent } from 'react';

class Cart extends PureComponent {
  render() {
    return (<p className="Cart">cart</p>);
  }
}

export default Cart;

```

## VALID

```javascript
import React, { PureComponent } from 'react';
import styles from './Cart.pcss';

class Cart extends PureComponent {
    render() {
        return (<p className={styles.Cart}>cart</p>)
    }
}

export default Cart;
```