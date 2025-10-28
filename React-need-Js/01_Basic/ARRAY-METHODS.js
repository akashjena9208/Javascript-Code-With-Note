// ✅ ARRAY CREATION & CHECKING
console.log(Array.isArray([1,2,3]));           // true → checks if array
console.log(Array.from('abc'));                // ['a','b','c'] → converts iterable to array
console.log(Array.of(1,2,3));                  // [1,2,3] → creates array from arguments

// ✅ ADD / REMOVE ELEMENTS
let arr = [1, 2, 3];
arr.push(4);                                   // adds 4 at end → [1,2,3,4]
arr.pop();                                     // removes last element → [1,2,3]
arr.unshift(0);                                // adds 0 at start → [0,1,2,3]
arr.shift();                                   // removes first element → [1,2,3]
arr.splice(1, 1, 5);                           // remove 1 element at index 1, add 5 → [1,5,3]
console.log(arr.slice(0,2));                   // [1,5] → copies part of array
console.log([1,2].concat([3,4]));              // [1,2,3,4] → merges arrays

// ✅ SEARCHING
let nums = [10, 20, 30, 20];
console.log(nums.indexOf(20));                 // 1 → first index of 20
console.log(nums.lastIndexOf(20));             // 3 → last index of 20
console.log(nums.includes(30));                // true → checks existence
console.log(nums.find(x => x > 15));           // 20 → first element >15
console.log(nums.findIndex(x => x > 25));      // 2 → index of first >25

// ✅ ITERATION / TRANSFORMATION
let data = [1,2,3,4];
data.forEach(x => console.log(x*2));           // 2,4,6,8 → iterate over all elements
console.log(data.map(x => x*3));               // [3,6,9,12] → transform each
console.log(data.filter(x => x>2));            // [3,4] → keep elements >2
console.log(data.reduce((a,b)=>a+b,0));        // 10 → sum of all elements
console.log(data.reduceRight((a,b)=>a-b));     // -2 → right to left reduce
console.log(data.some(x => x>3));              // true → any element >3?
console.log(data.every(x => x>0));             // true → all elements >0?

// ✅ SORTING & REVERSING
let names = ['b','a','c'];
names.sort();                                  // ['a','b','c'] → sort alphabetically
names.reverse();                               // ['c','b','a'] → reverse order
console.log([3,1,2].toSorted());               // [1,2,3] → new sorted array (ES2023)
console.log([1,2,3].toReversed());             // [3,2,1] → new reversed array (ES2023)

// ✅ JOIN & STRING CONVERSION
let letters = ['H','i'];
console.log(letters.join('-'));                // "H-i" → join with separator
console.log(letters.toString());               // "H,i" → convert to string
console.log(letters.toLocaleString());         // "H,i" → locale-based string

// ✅ FILL & COPY
let fillArr = [1,2,3,4];
fillArr.fill(0,1,3);                           // [1,0,0,4] → fill part with 0
console.log([1,2,3,4].copyWithin(2,0,2));      // [1,2,1,2] → copy first 2 items to index 2

// ✅ FLAT & FLATMAP
console.log([1,[2,[3]]].flat(2));              // [1,2,3] → flatten nested arrays
console.log([1,2,3].flatMap(x => [x, x*2]));   // [1,2,2,4,3,6] → map + flatten
