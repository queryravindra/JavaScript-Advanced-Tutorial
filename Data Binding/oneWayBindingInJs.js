const render = property => {
    document.querySelector(`[data-binding="${property}"]`).innerHTML = state.property;
};

const setState = state => {
    return new Proxy(state, {
        set(target, property, value) {
            target.property = value;
            render(property);
        }
    });
};

const state = setState({
    // quote1: 'Initial quote state.'
});
// console.log(state);

// state.quote1 = 'quote1 new state';
// state.quote2 = 'quote2 new state';