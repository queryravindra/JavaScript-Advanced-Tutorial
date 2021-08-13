// Debouncing in javaScript

let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data...", counter++)
}


const debounce = function(fn, d) {
    let timer;
    return function() {
        let context = this;
            args = arguments;
        clearTimeout(timer);
        setTimeout(() => {
            getData.apply(context, args);
            // In this setTimeout() method we are calling this getdata() method and we are waiting for this delay of 300ms and if
            // again a keystroke is happen then we should stop calling this method
        }, d);
    }
}


const betterFunction = debounce(getData, 300)

// only do some magic(doSomeMagic()) and only call getdata() method when the difference of time between two keypress events > 300ms or 300ms