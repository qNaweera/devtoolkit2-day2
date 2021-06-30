//variables can be any type 
//var x =12;
// let x = 12;
//x ="Alice";

//console.log("My message"); 

// console.log(`Value of x: ${x}`);

// conditional statement
// let age = 19;
// if (age>18) {
//     console.log ("You can vote!");
// } else {
//     console.log("You can't vote yet");
// }

// functions
// function print_sum(a, b) {
//     console.log(`a: ${a}`);
//     console.log(`b: ${b}`);
  
//     console.log(`a + b = ${a + b}`);
//   }
//   print_sum(2,3);

//   function add(a,b) {
//       return a+b;
//   }

//   var sum = add(2,3);
//   console.log(`Sum: ${sum}`);
// anonymous functions but need to put a variable
// variables can also store functions
// var function_to_print_sum = function (a,b) {
//     console.log("a+b = " + (a+b));
// };

// function_to_print_sum (4,4);

// var function_to_print_sum = (a,b)=> {
//     console.log("a+b = " + (a+b));
// }
// function_to_print_sum (4,4);

// callback functions

function print_after_operation (a,b,operation){ //operation is a call back function
    var result = operation (a,b);
    console.log("Result: " + result);
}

function add (a,b) {
    return a+b;
}

function product(a,b) {
    return a*b;
}


  
  print_after_operation(3, 4, add);
  print_after_operation(3, 4, product);
  print_after_operation(3, 4, (a, b) => {
    return a - b;
  });
  
