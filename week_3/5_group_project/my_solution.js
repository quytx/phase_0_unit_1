*What was this experience like?
   - It was the first time I do a group project. It feels great being able to co-operate with other team members. My part of work is doing the refractoring and it was fun reading my teammates' code and pseudo-code


*Was your group successful in passing the tests?
 - Yes

*What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
 - They all need to be concise. I tend to put too much wording in the description and definitely need to improve that.


------------------------------------------------------------------------------------------------------------------


/**
I want to test if a function behaves properly and evaluates to true given a specific number value and gives me the feedback. 

The function accepts three parameters: codesnippet (true or false), errormessage (a string) and testNumber (an integer) and provides a feedback of the test result.

If the codesnippet evaluates to true, a message saying the test is passed will be printed out and the function returns true.
Otherwise, it will be printed to the console that the tested function evaluates to false and a custom error message (the input string in the 'errormessage' parameter) will be thrown by the function.
*/
function assert(codesnippet, errorMessage, testNumber) {
    if (codesnippet === true); {
      console.log(testNumber + "true");
      return true;
    } else {
      console.log(testNumber + "false");
      throw "Error: " + errorMessage;
    }
}

/** 
Create two new arrays of numbers for testing. One with even number of elements and one with odd number of elements. 
*/
var oddLengthArray = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

/** 
I want a function that returns the sum of all the elements contained in an array of numbers.
*/
function sum(arr) {
    var total = arr[0];
    for (var i = 1; i < arr.length; i++) {
      total += arr[i];
    }
    console.log(total);
}

/** 
I want a function that returns the average (or mean) of all the elements contained in an array of numbers.
*/
function mean(arr) {
    var sum = 0;
    for (var i = 0, l = arr.length; i < l; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

/**
I want a function that returns the median value of all elements contained in an array of numbers.
*/
function median(arr) {
    
    // Sort the array in ascending order
    arr.sort( function(a,b) { return a - b } );
    
    // Find the median value
    var length = arr.length;
    if (length % 2 !== 0){
        return arr[(Math.floor(arr.length / 2))];
    }
    var middle = arr.length / 2;
    return (arr[middle] + arr[middle - 1]) / 2;
}



