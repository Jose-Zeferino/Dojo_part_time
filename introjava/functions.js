// //   Counter
// // function counter(startNum) {
// //     for (var num = startNum; num >= 0; num--) {
// //         console.log(num);
// //     }
// // }
// // counter(6);

// function createArray(num) {        
//         var newArray = [];        
//         for (var i = 0; i <= num; i++) {                
//             newArray.push(i);        
//         }        
//         return newArray;        // added the return statement
//     }
    // var y = createArray();        // now y is the variable that is calling on createArray

    function createArray(num) {        
            var newArray = [];       
            for (var i = 0; i <= num; i++) {                
                newArray.push(i);        
            }
        //  add a return statement here. what from the above are you taking to console? Example: With out this line see line 27.
            return newArray;
        }
       var y = createArray(5);
        //The newArray only exists inside of the function.  Out here it no longer exists!
        