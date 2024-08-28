# simple-string-truncate

`simple-string-truncate` is a lightweight utility for truncating strings in JavaScript. It allows you to dynamically set a length limit and append a custom truncation symbol (e.g., `...`) when the string exceeds the specified limit. This package handles various edge cases, ensuring robust performance.

## Features

- **Dynamic Truncation**: Set custom length limits and truncation symbols.
- **Edge Case Handling**: Gracefully handles non-string inputs, short strings, and invalid truncation limits.
- **Lightweight**: Minimalistic and efficient, perfect for small to mid-sized projects.

## Installation

You can install `simple-string-truncate` via npm:

```bash
npm install simple-string-truncate
```

## Usage
Here’s a simple example of how to use simple-string-truncate:

```javascript
const truncateString = require('simple-string-truncate');

const longString = 'This is a long string that needs to be truncated';
const shortString = 'Short string';

console.log(truncateString(longString, 20)); // Output: 'This is a long str...'
console.log(truncateString(shortString, 20)); // Output: 'Short string'

```

## Parameters
-- **str (string)** : The string to be truncated.
-- **limit (number, optional)** : The maximum length of the string before truncation. Default is 50.
-- **symbol (string, optional)** : The symbol to append to the truncated string. Default is ....

## Edge Cases
**Non-string input** : Throws an error.
**Empty string** : Returns an empty string.
**limit less than the length of symbol** : Throws an error.
**Strings shorter than or equal to limit** : Returns the original string without modification.


## Example
```javascript
// Truncate with a custom limit and symbol
const customTruncate = truncateString('Truncate me!', 8, '---');
console.log(customTruncate); // Output: 'Trunca---'

// Handle edge cases
try {
    truncateString(12345, 5); // Non-string input
} catch (error) {
    console.error(error.message); // Output: 'Input must be a string'
}

```

## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.