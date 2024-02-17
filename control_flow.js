// falsy value
// false, 0, -0, BigInt 0n, null, undefined, NaN, ""

// truthy value
// true, 1, [], "0", 'false', " ", {}, function() {}


// Nullish Coalescing Operator (??) : null undefined

let val1 = null ?? 10  //10

val1 = null ?? 10 ?? 20  //20

val1 = null ?? null ?? 20 //20
console.log(val1);