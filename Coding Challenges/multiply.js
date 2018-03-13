//tripleMult(2)(3)(3)

//Write a function that can be invoked in this manner and returns the three numbers passed in multiplied together

// function tripleMult(x){
// 	return two;
// 	function two(y){
// 		return three;
// 		function three(z){
// 			return x * y * z;

// 		}
// 	}
// }

// console.log(tripleMult(3)(3)(4));


// //Write a function that allows that. And as you call it more later on have it work unlimited times. So it accepts unlimited numbers called the same way.

// console.log("The result is: " + tripleMult(2)(3)(3)(2));
// console.log("The result is: " + tripleMult(10)(5)(5)(5));


function tripleMult(x){
	return function(x){
		return function (x){
			return tripleMult.prototype.toString = function multToString(x) {
   						var total = x + x + x
   						return total;
   						return tripleMult(x)
					}
		}
	}
}
//tripleMult(5)(5)(6)
// mult1 = new tripleMult(3)(3)(3)


// //console.log(mult1)

// tripleMult.prototype.toString = function multToString(x) {
	
//    	var total = x + x
//    	return total;
// }

console.log(tripleMult(1)(2)(3)(4))
//console.log(tripleMult.prototype)


// console.log(mult1.toString())
//console.log(tripleMult(5)(5)(6));


//console.log(argArray)

// function multiply(x){
// 	var answer = 1;
// 	for(var i = 0; i < arguments.length; i++){
// 		answer *= arguments[i];
// 		//console.log(answer);
// 	}
// 	return answer
// }

//console.log("5" * "5")

//console.log("The result is: " + tripleMult(2)(3)(3));
//console.log(tripleMult(3)(3)(4));


// var numArr = [];
// var funArr = [];
// for(var i = 0; i < 10; ++i){
//     numArr[numArr.length] = i;
//     funArr[funArr.length] = getFun(i);
// }

// function getFun(val) {
//     return keep;
		//function keep() { return val; };
// }
