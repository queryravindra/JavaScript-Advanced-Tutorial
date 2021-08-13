var i;

var print = function() {
    console.log(i);
};

for(i=0; i<10; i++){
    // setTimeout(print, 1000); // It will print 10 times
    print();
}