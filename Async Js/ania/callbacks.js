// callback is essentially a function that is passed into another function and then called inside that function to complete some action

// const button = document.querySelector('button');

// function toggle() {
//     button.classList.toggle('altColor');
// }

// // toggle();

// // button.addEventListener('click', toggle);


// // same as above

// // button.addEventListener('click', function () {
// //     button.classList.toggle('altColor');
// // });


// // same as above

// button.addEventListener('click', () => {
//     button.classList.toggle('altColor');
// });




const button = document.querySelector('button');

function toggle(color) {
    button.classList.toggle('altColor');
}

button.addEventListener('click', toggle('anotherAltColor'));