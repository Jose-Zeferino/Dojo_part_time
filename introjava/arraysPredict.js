// //Predict 1:
// var arr = [8,6,7,5,3,0,9]
// for(var i = 0; i < arr.length; i++){    
//     console.log(arr[i]);
// }

// // Var i is set to zero. Array length is seven. Array index is zero through six. This would log 8,6,7,5,3,0,9


// //Predict 2:
// var arr = [7,3,8,4,2,0,1];
// for(var i = 0; i < arr.length; i++){ 
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     } 
//     else{
//         console.log("That is odd!");
//     }
// }


// var i is set to zero. Array.length is seven. In the if statement we are looking for multiples of two. The way this funtion is written we log "That is odd" for every value in the array that is not a multiple of two. For the values in the array that are you log the value of said number. console.log
                                                            // that is odd , that is odd, 8, 4, 2, 0, thats odd
                                                            // hint there are seven values in the array the funtion runs through all these values. you will have seven sets of data
    
//Predict 3:
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// I am not understanding why or where in this code the computer would know to loop back through its self. 
// I see how the first two answers will be -1, -3 after that I would not of known to loop back. *ran with node*
// The actual answer is (arr)[-1 -3  -8,5  'Zero', 2, -4, 1] 
                      //(newArr)[-5, -2, -1]

                      