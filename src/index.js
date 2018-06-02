/****************************************************
 * Example 1
 */
str = 'pamplona';
console.log('ORIGINAL');
console.log(str.indexOf('na')); // 5
console.log(str.indexOf('', -1)); // 5
console.log(str.indexOf('', 0)); // 5
console.log(str.indexOf('', 2)); // 5
console.log(str.indexOf('', 70)); // 5
console.log(str.indexOf('pam')); // 0
console.log(str.indexOf('na', 3)); // 6
console.log(str.indexOf('na', 4)); // 6
console.log(str.indexOf('plo', 4)); // -1
console.log(str.indexOf('onaasd')); // -1
console.log(str.indexOf('onfdfda')); // -1
console.log(str.indexOf('onas')); // -1
console.log('NEW');
console.log(str.indexOfNew('na')); // 5
console.log(str.indexOfNew('', -1)); // 5
console.log(str.indexOfNew('', 0)); // 5
console.log(str.indexOfNew('', 2)); // 5
console.log(str.indexOfNew('', 70)); // 5
console.log(str.indexOfNew('pam')); // 0
console.log(str.indexOfNew('na', 3)); // 6
console.log(str.indexOfNew('na', 4)); // 6
console.log(str.indexOfNew('plo', 4)); // -1
console.log(str.indexOfNew('onaasd')); // -1
console.log(str.indexOfNew('onfdfda')); // -1
console.log(str.indexOfNew('onas')); // -1

/****************************************************
 * Example 2
 */
const str2 = 'tuturron';
console.log('ORIGINAL');
console.log(str2.indexOf('tu', 1));
console.log('NEW');
console.log(str2.indexOf('tu', 1));