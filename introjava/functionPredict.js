// function greeting(){
//         return "Hello";
//         console.log("World");
//     }
//     var word = greeting();
//     console.log(word);
    
    // the above will log Hello 

    // function add(num1, num2){
    //         console.log("Summing Numbers!");
    //         console.log("num1 is: " + num1);
    //         console.log("num2 is: " + num2);
    //         var sum = num1 + num2;
    //         return sum;
    //     }
    //     var result1 = add(3,5);
    //     var result2 = add(4,7);
    //     console.log(result1);
    //     console.log(result2);

        // the above will return 8 and 11


        function highFive(num){
                for(var i=0; i<num; i++){
                    if(i == 5){
                        console.log("High Five!");
                    }
                    else{
                        console.log(i);
                    }
                }
            }
            highFive(9)

            // the above prints any sequance of number up to the value entered when the function is called. On the fith count it prints High Five and continues with a numerical sequance there after. 
