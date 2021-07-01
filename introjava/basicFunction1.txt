function a(){
    return 35;
}
console.log(a())

// The above would return 35 beacuse it is being told to return that value on line two. 

function a(){
    return 4;
}
console.log(a()+a());

// This one will also return 4 because its being told to return that value. 

function a(b){
    return b;
}
console.log(a(2)+a(4));

// The above will return 6. The value of a in line 15 is the sum of 2+4 in line 20. Six becomes the b and the value of b is returned on line 16.

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

// The above returns 9. Value of 3 assigned to b on line 26 carried to line 24. Returning 9.
    
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

 // The above returns 40. The value of b is assigned on line 36 carried to line 31 the return stops the function. 

 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// The above returns 4. 15 is > than 10 so skips the if and does else. 

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// The above would log 10,3 because it says to do so. Then line 55 calls function a. This logs 30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// The above would return 3 then 4. The function is not called.

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// The above function if 76 was A(10) 70 function a(num) 71 i < num would log 2,5,8,11,
// The for loop returns 2,5,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

// The above logs  012345678901234567890 The function is called twice on lines 87 and 88.

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// The above function if it was called on would return ten loops/ itterations of this function each with the tenth value increasing from zero to nine in each reitteration. 

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// I could not see this at all. After running it I visualy see what is happening via the results but why would this be needed. The log is crazy.  0 0 the 0 1 then 0 2 all the way through 10 9.


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// The above will log 10 its the first value assigned to Z as the computer runs through the code. The function is not called on so the purple is not logged.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// The fist line to execute is 129 calling funtion line 125. Logging at line 127 the value of 15 then line 130 bringing the value of 10. loggs 15 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// To me I see z being given a value of 15 on line 136. So line 137 log 15 and for line 138 log 15.Return stops the function. 