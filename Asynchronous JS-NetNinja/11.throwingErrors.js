// async & await


const getTodos = async () => {
    const response = await fetch('todos/luigis.json');

    if(response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then( data => console.log('resolved:', data))
    .catch( err => console.log('rejected:', err.message));


    // when we throw a new error inside async function the promise returned by this async function is rejected and therefore
    // if it is rejected we can catch this error in catch which just thrown

    // when there is a problem with the resource url instead of json error the thrown error will get