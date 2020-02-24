// ==== Callbacks ====  

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
const addMystery = function(a, b) {
    return a + b + 17;
}
const consume = (a, b, cb) => {
    return cb(a, b);
}

console.log(consume(3, 5, addMystery));

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = function(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}
const greeting = function(firstName, lastName) {
    return `Hello ${firstName} ${lastName}, nice to meet you!`;
}



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 


const external = "I'm outside the function"; //this is Jerry Maguire, an outsider, an outlier, a variable without purpose

function myFunction() { //here is  a function with purpose
    console.log(external); // this function is calling something it doesn't have right now to complete its statement... its Jerry^ jerry completes this function
    const internal = "Hello! I'm inside myFunction!"; // this is an internal variable that is not allowed outside of its function

    function nestedFunction() { //this nested function is INSIDE it's function, it is seperate, but still an insider.
        console.log(internal); //it doesn't have it's own way to complete this so it's going to look outside it's scope, aha, its been completed with internal.
    };
    nestedFunction(); //call the nested cuntion
}
myFunction(); //call its momma function , that jerry, he still serves no function of his own but he completes this one.