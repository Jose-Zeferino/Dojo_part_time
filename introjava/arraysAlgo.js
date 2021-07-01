// Print each array value and the sum so far
// The expected output will be:n
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21


var testArr = [6,3,5,1,2,4];
2	var sum = 0;
3	for( var num = 0;num <= testArr.length; num++){
4	    console.log(testArr[num])
5	    sum = sum += testArr[num]
6	    console.log(sum)
7	}


// Value * Position

// Multiply each value in the array by its array position
// The expected output will be: [0,3,10,3,8,20]


var testArr = [6, 3, 5, 1, 2, 4];
var result = (num);
for (var num = 0; num < testArr.length; num++) {
    result = num * testArr[num]
    console.log(result);
}

