/**
 * JAVASCRIPT HOISTING BEHAVIOR DEMONSTRATION
 * ==========================================
 *
 * This code demonstrates different hoisting behaviors for:
 * 1. Function Declarations
 * 2. Variable Declarations (var)
 * 3. Function Expressions
 * 4. Arrow Functions
 *
 * HOISTING OVERVIEW:
 * ==================
 * Hoisting is JavaScript's behavior of moving declarations to the top of their scope
 * during the memory creation phase, before any code execution begins.
 *
 * MEMORY CREATION PHASE RESULT:
 * =============================
 * Before ANY line executes, JavaScript engine creates:
 *
 * Global Memory State:
 * ┌─────────────────────────────────────┐
 * │ x: undefined                        │ ← var hoisted, initialized with undefined
 * │ getName: [Complete Function Object] │ ← Function declaration fully hoisted
 * │ getName2: undefined                 │ ← var hoisted, function not assigned yet
 * │ getName3: undefined                 │ ← var hoisted, arrow function not assigned yet
 * └─────────────────────────────────────┘
 *
 * EXECUTION TIMELINE:
 * ===================
 */

// ✅ WORKS: Function declarations are fully hoisted
// getName() is available even before its declaration line
getName();
console.log(getName);

// ✅ WORKS: var variables are hoisted but initialized with undefined
console.log(x);         // Output: undefined (not ReferenceError)
console.log(getName2);  // Output: undefined (not ReferenceError)
console.log(getName3);  // Output: undefined (not ReferenceError)

/**
 * DECLARATION PHASE:
 * ==================
 * Now the actual assignments happen during execution phase
 */

/**
 * FUNCTION & VARIABLE ASSIGNMENTS:
 * ================================
 * During execution phase, variables get their actual values
 */

// var assignment - x changes from undefined to 5
var x = 5;

// 🟢 FUNCTION DECLARATION: Fully hoisted
// This entire function is available from the beginning of the script
function getName() {
  return "Devrath";
}

// 🟡 FUNCTION EXPRESSION: Only variable is hoisted
// getName2 was undefined before this line, now gets function object
var getName2 = function () {
  return "Devrath Rana";
};

// 🟡 ARROW FUNCTION: Same behavior as function expression
// getName3 was undefined before this line, now gets arrow function
var getName3 = () => {
  return "Devrath Rana Singh";
};

/**
 * POST-ASSIGNMENT EXECUTION:
 * ==========================
 * Now all functions are available and can be called
 */

// ✅ These work because functions are now assigned
getName2();  // Returns: "Devrath Rana"
getName3();  // Returns: "Devrath Rana Singh"

// ✅ Final state logging
console.log(x);         // Output: 5 (assigned value)
console.log(getName2);  // Output: [Function] (function object)
console.log(getName3);  // Output: [Function] (arrow function object)

/**
 * HOISTING COMPARISON SUMMARY:
 * ============================
 * 
 * 1️⃣ FUNCTION DECLARATIONS:
 * - ✅ Fully hoisted (entire function available)
 * - ✅ Can be called before declaration line
 * - Example: function getName() {}
 * 
 * 2️⃣ VAR VARIABLES:
 * - ✅ Hoisted but initialized with undefined
 * - ❌ Cannot be used meaningfully before assignment
 * - Example: var x = 5;
 * 
 * 3️⃣ FUNCTION EXPRESSIONS (var):
 * - ✅ Variable hoisted with undefined
 * - ❌ Function not available until assignment line
 * - ❌ Calling before assignment: TypeError (undefined is not a function)
 * - Example: var getName = function() {}
 * 
 * 4️⃣ ARROW FUNCTIONS (var):
 * - ✅ Variable hoisted with undefined  
 * - ❌ Function not available until assignment line
 * - ❌ Calling before assignment: TypeError (undefined is not a function)
 * - Example: var getName = () => {}
 * 
 * 5️⃣ LET/CONST FUNCTIONS:
 * - ❌ Temporal Dead Zone (hoisted but uninitialized)
 * - ❌ Calling before declaration: ReferenceError
 * - Example: const getName = () => {}
 * 
 * ERROR TYPES:
 * ============
 * - ReferenceError: Variable/function doesn't exist in memory
 * - TypeError: Variable exists but is not a function (e.g., undefined())
 * 
 * MEMORY MANAGEMENT:
 * ==================
 * Stack Memory (Execution Context):
 * - Function declarations: Complete function object stored
 * - Variables: References to values stored
 * - Primitive values: Stored directly in execution context
 * 
 * Heap Memory:
 * - Function objects: Code, scope chain, prototype stored here
 * - Complex objects: Stored in heap, referenced from stack
 */
