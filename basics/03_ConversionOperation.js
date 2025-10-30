let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));
//const {score} = req.body

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" => 3
//"33abc" => NaN
//true => 1; False => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "mayank"=> true

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(typeof stringNumber)

let str1 = "hello"
let str2 = " Mayank"
let str3 = str1 + str2;
console.log(str3);

//Complex situations
///console.log("1"+2);
///console.log(1 + "2");
///console.log("1" + 2 + 2);
///console.log(1 + 2 + "2");// look for defined instructions in echma script. we would see more later

//Note: Always write code with an intension that the fello developer can read/understand it do not make ode comlex.

//console.log(+true) => 1
//console.log(+"") => 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gamecounter = 100;
//gamecounter++;
++gamecounter;                  // study prefix and postfix docs from js mdn incremental
console.log(gamecounter);

