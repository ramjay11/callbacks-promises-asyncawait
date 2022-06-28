// Fetch API requires a discussion of...
// Callback, Promises, Thenables and Async/Await
/**In JavaScript, a thenable is an object that has a then() function. All promises are thenables, but not all thenables are promises. */

// Callbacks
function firstFunction(parameters, callback) {
    // Do stuff
    callback()
}

// AKA "callback hell"
firstFunction(para, function() {
    // Do stuff
    secondFunction(para, function() {
        thirdFunction(para, function() {

        });
    });
});

// Promises has 3 states:  Pending, Fulfilled, Rejected. Javascript is usually synchronous meaning doing 1 thing at a time
// but a Promises is asynchronous

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! resolve the promise.");
    } else {
        reject("No! rejected the promise.")
    }
});

console.log(myPromise);
// To get the value out of the Promise by chaining thenables by using anonymous function
myPromise.then(value => {
    //console.log(value);
    return value + 1;
}).then(newValue => {
    console.log(newValue);
}).catch(err => {
    console.error(err);
})


// Timeout, delay execution of code by 3 seconds
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});