let a=10;
const b=100;
var c=200;
console.log(a, b, c);

/**
 * 
 * In browser DevTools, when you inspect variables declared with `let` and `const`, you’ll see that their **scope** is the block (or script/module) in which they are declared.

- **Script Scope:**  
  If you declare `let` or `const` at the top level of a script (not inside a function or block), their scope is the entire script.  
  In DevTools, this is often shown as "Script" or "Global" scope, but they are **not** attached to the `window` object (unlike `var`).

- **Block Scope:**  
  If declared inside a block (`{ ... }`), their scope is limited to that block.

**In your HTML example:**  
```javascript
let a = 10;
const b = 100;
var c = 200;
```
- `a` and `b` are in the **script scope** (not global object).
- `c` is in the **global scope** (attached to `window`).

**In DevTools:**
- Typing `a` or `b` in the console outside the script will give a ReferenceError.
- Typing `c` will return `200` because `var` attaches to `window`.

**Summary Table:**

| Declaration | Scope in DevTools | Attached to window? |
|-------------|------------------|---------------------|
| let         | Script/Block     | No                  |
| const       | Script/Block     | No                  |
| var         | Global           | Yes                 |

**TDZ:**  
Before their declaration line is executed, `let` and `const` are in the Temporal Dead Zone and cannot be accessed, even though they are scoped to the script.
 */