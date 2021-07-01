for(var num = 0; num < 15; num++){
   console.log(num);
}

// num is assigned the value of zero. Starting the count at zero. Once num is no longer true the funtion stops and does not count the number  console logging 0-14. 

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// i is set to one. The moduler sets i to count by threes. This if statement will conole.log modulers of three with in one to ten. logging 3 and 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// j is set to 1. one is less than and not equal to 15. One is not a multiple of two so line 17 is ignored. Now checking line 19 - one is not a multiple of three. Line 20 is ignored - logging one. This funtions stops when j is equal to 15. You will log the value of j as it hits cosole.log keeping in mind that the value of j is carried throught the funtions and only changes if it interacts with one of the two conditional statements and incress depending on the rule of the statement or staements the value of j interacts with. in this example we are logging 1,4,5,8,10,11,14,16