// ✅ CREATION & COPY
let obj = { a:1, b:2 };
let copy = Object.assign({}, obj);             // copies obj → {a:1,b:2}
let clone = structuredClone(obj);              // deep clone (ES2023)
let protoObj = Object.create({x:10});          // creates object with prototype

// ✅ KEYS / VALUES / ENTRIES
console.log(Object.keys(obj));                 // ['a','b'] → keys
console.log(Object.values(obj));               // [1,2] → values
console.log(Object.entries(obj));              // [['a',1],['b',2]] → key-value pairs
console.log(Object.fromEntries([['x',10]]));   // {x:10} → from entries array

// ✅ PROPERTY DESCRIPTORS
let user = {};
Object.defineProperty(user, 'name', { value: 'Akash', writable: false });
console.log(Object.getOwnPropertyDescriptor(user, 'name')); // shows property details
console.log(Object.getOwnPropertyDescriptors(user));         // shows all descriptors

// ✅ PROTOTYPE & TYPE
console.log(Object.getPrototypeOf(obj));       // gets prototype of obj
Object.setPrototypeOf(obj, {z:99});            // sets new prototype
console.log(obj.hasOwnProperty('a'));          // true → own property check
console.log(Object.is(NaN, NaN));              // true → strict equality check

// ✅ SEAL / FREEZE / EXTEND
let dataObj = { p:1 };
Object.freeze(dataObj);                        // freeze → cannot modify
console.log(Object.isFrozen(dataObj));         // true
Object.seal(obj);                              // seal → can’t add/remove keys
console.log(Object.isSealed(obj));             // true
Object.preventExtensions(obj);                 // prevent adding new keys
console.log(Object.isExtensible(obj));         // false



///operators for React & interviews
// Spread operator for arrays
let arr1 = [1,2];
let arr2 = [...arr1, 3, 4];                    // [1,2,3,4]

// Spread operator for objects
let obj1 = {a:1, b:2};
let obj2 = {...obj1, c:3};                     // {a:1,b:2,c:3}

// Destructuring
let [x, y] = [10, 20];                         // x=10, y=20
let {a, b} = {a:5, b:6};                       // a=5, b=6





//Most frequently used methods when building real-world React apps Object 
Object.keys(obj)       // For iterating over object keys
Object.values(obj)     // For displaying values
Object.entries(obj)    // For mapping over key-value pairs
Object.assign()        // For merging states/objects
let newObj = {...obj}; // Spread operator (React state updates)

