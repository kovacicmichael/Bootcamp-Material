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
	return two;
	function two(y){
			return three;
		function three(z){
			if(z !== undefined){
			count = 1
			return rest;
				function rest(s){
					console.log("here")
					return x * y * z * s;
					count++
				}
			}
				
			
		}
	}
}

function multiply(x){
	var answer = 1;
	for(var i = 0; i < arguments.length; i++){
		answer *= arguments[i];
		//console.log(answer);
	}
	return answer
}

console.log(multiply(5, 5, 6, 8))

//console.log("The result is: " + tripleMult(2)(3)(3));
//console.log(tripleMult(3)(3)(4));


// for(var i = 0; i < 10; ++i){
//     numArr[numArr.length] = i;
//     funArr[funArr.length] = function(){  return i; };
// }
