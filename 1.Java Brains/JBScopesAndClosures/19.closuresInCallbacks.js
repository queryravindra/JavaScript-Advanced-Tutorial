// Javascript is single threaded and there is no concept of wait, pause but you have a feature called setTimeout()

var a = 10;  // creates a variable and assigns a value 10 to it

// wait for 1 second

var fn = function() {
    console.log(a);
}

// setTimeout(fn(), 1000);

setTimeout(fn, 6000); // fn() --> execute this function and take that return value and send it to setTimeout() but i want to send this function itself thats why fn

console.log("Done");


// when you execute the function the function remembers what the scope of variables were when it was created so you no need to worry about the copying over the scope , the scope always exist as part of function object