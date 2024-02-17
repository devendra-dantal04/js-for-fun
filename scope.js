one(5);
function one(num) {
    console.log("One Function ", num);
}


/* 
the function or values which defined using the const keyword
are unaccessible until execution reach to the declaration
*/

// console.log(twoFunc);

const twoFunc = function (num) {
    console.log("One Function ", num);
}

// twoFunc(6);

console.log(this);


function addTwo(num) {
    console.log(num*2);
}

// const newArr = [10,20,30,40];

// newArr.forEach(addTwo);

console.log(function two() {
    return 2;
}()*2);

// console.log(process.stdout.write("Hello"));
