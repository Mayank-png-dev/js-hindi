// Generally Comparison between number gives boolan value.
console.log("2">1);
console.log("02">1);
//when we are comparing two differnt datatypes => result becomes unpredictable. So 
//usually the better approach is too compare same datatypes.

console.log(null>0); //false //-->avoid
console.log(null==0); //false
console.log(null>=0); //true     // same for undefined=> all are false.

// == (Equality operator)
//Checks if two values are equal after type conversion (also called type coercion).--> not necessary converts to number. converts to what is required
//JavaScript will convert types (string → number, etc.) to compare.
//Example:
//5 == '5'   // true  → because '5' is converted to number 5
//0 == false // true  → because false is converted to number 0
//null == undefined // true → special case


// >=/<= (comparison operator)
// before comparison javascript tries to convert both sides to number 
//Example:
//5 >= '3'   // true  → '3' converted to 3
//'10' <= 9  // false → '10' converted to 10 → 10 <= 9 is false
//'abc' <= 'abd' // true → compared lexicographically (as strings)

//strict check ===
//checks value and datatypes. It does not perform conversion