const x = 2;
const getSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSum(x)); // Output: 3
console.log(getSum(5)); // Output: 15
// Explanation: The function getSum calculates the sum of all integers from 1 to n.

/**
 * JAVASCRIPT ENGINE INNER WORKINGS EXPLANATION
 * ===========================================
 * 
 * JavaScript executes code in TWO MAIN PHASES:
 * 1. MEMORY CREATION PHASE (Compilation/Parsing)
 * 2. CODE EXECUTION PHASE
 * 
 * PHASE 1: MEMORY CREATION PHASE
 * ==============================
 * Before any code execution, JS engine scans entire script and allocates memory:
 * 
 * Global Memory State After Parsing:
 * ┌─────────────────────────────────────┐
 * │ GLOBAL EXECUTION CONTEXT            │
 * ├─────────────────────────────────────┤
 * │ x: uninitialized (TDZ)              │ ← const variables in Temporal Dead Zone
 * │ getSum: [Complete Function Object]  │ ← Entire function stored in memory
 * └─────────────────────────────────────┘
 * 
 * Key Points:
 * - const/let are HOISTED but NOT INITIALIZED (Temporal Dead Zone)
 * - Function declarations are FULLY HOISTED (entire function available)
 * - var would be hoisted and initialized with 'undefined'
 * 
 * PHASE 2: CODE EXECUTION PHASE
 * =============================
 * 
 * Step 1: const x = 2;
 * --------------------
 * Memory: x gets value 2 (exits Temporal Dead Zone)
 * Call Stack: [Global Execution Context]
 * 
 * Step 2: console.log(getSum(x)); 
 * --------------------------------
 * When getSum(x) is called:
 * 
 * 2a) NEW EXECUTION CONTEXT CREATED:
 * Call Stack:
 * ┌─────────────────────────────────────┐
 * │ getSum Execution Context            │ ← NEW CONTEXT
 * │ ├─ n: 2 (parameter value)           │
 * │ ├─ sum: 0 (let sum = 0)             │
 * │ └─ i: undefined (not in scope yet)  │
 * ├─────────────────────────────────────┤
 * │ Global Execution Context            │ ← PREVIOUS CONTEXT
 * └─────────────────────────────────────┘
 * 
 * 2b) LOOP EXECUTION BREAKDOWN:
 * Iteration 1: i=1, condition(1<=2)✓, sum=0+1=1, i++ → i=2
 * Iteration 2: i=2, condition(2<=2)✓, sum=1+2=3, i++ → i=3  
 * Exit: i=3, condition(3<=2)✗, loop ends
 * 
 * 2c) RETURN & CONTEXT DESTRUCTION:
 * - Return value: 3
 * - getSum context DESTROYED and removed from call stack
 * - Control returns to Global context
 * - Value 3 passed to console.log()
 * 
 * Step 3: console.log(getSum(5));
 * -------------------------------
 * Process repeats with new execution context:
 * - Parameter n = 5
 * - Loop runs 5 times: sum = 1+2+3+4+5 = 15
 * - Returns 15, context destroyed
 * 
 * MEMORY MANAGEMENT DETAILS
 * =========================
 * 
 * Stack Memory (Execution Contexts):
 * - Stores primitive values directly (numbers, strings, booleans)
 * - Stores references to objects/functions
 * - Each function call creates new execution context
 * - LIFO (Last In, First Out) principle
 * 
 * Heap Memory:
 * - Stores objects and functions
 * - getSum function object stored here
 * - Contains function code, scope information, prototype chain
 * 
 * CALL STACK VISUALIZATION:
 * =========================
 * 
 * Initial:     During getSum(x):    After return:    During getSum(5):    Final:
 * [Global]  →  [getSum Context]  →  [Global]      →  [getSum Context]  →  [Global]
 *              [Global]                             [Global]
 * 
 * EXECUTION CONTEXT COMPONENTS:
 * =============================
 * Each execution context contains:
 * 1. Variable Environment: Stores var declarations and function declarations
 * 2. Lexical Environment: Manages let/const and scope chain  
 * 3. This Binding: Reference to current object (Global object in this case)
 * 
 * HOISTING BEHAVIOR:
 * ==================
 * - Function Declarations: Fully hoisted (can call before declaration)
 * - const/let: Hoisted but uninitialized (Temporal Dead Zone until declaration line)
 * - var: Hoisted and initialized with undefined
 * 
 * SCOPE AND CLOSURE:
 * ==================
 * - Each execution context has access to its own variables
 * - Inner functions can access outer scope variables (closure)
 * - getSum function has access to global scope
 * - Local variables (n, sum, i) are only accessible within function scope
 */
