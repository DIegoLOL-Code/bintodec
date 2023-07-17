# Bintodec
Binary to Decimal and Decimal to Binary Functions
### How To Use It:
After download it, open the directory on the terminal and run `npm test`
Inmediatly you will see an predefined example, but you can edit it on the `index.js` file.

### binToDec Function
The `binToDec` function, takes only one string argument like "10110" and returns the equivalent Decimal Number.

#### Example:
```js
const btc = require('./bintodec.js')
console.log(btd.binToDec('10110')) //Returns 22
```

### decToBin Function
The `decToBin` function, takes only one number argument like "22" and returns the equivalent Binary String.

#### Example:
```js
const btd = require('./bintodec.js')
console.log(btd.decToBin(22)) //Returns '10110'
```
