// Singletons in JavaScript

// -> used when you only want a single instance of a class
// -> there are many ways to do it, this is my example
// -> example use case is a Settings/Environmental Vars accessor


// class Settings {
//     constructor() {
//         this.settingsObject = {
//             'background': '#ff0000',
//             'version': Math.floor(Math.random() * 4000)
//         };

//         Object.freeze(this.settingsObject);
//     }

//     get(key) {
//         return this.settingsObject[key];
//     }
// }



class Settings {
    constructor() {

        if(Settings.instance instanceof Settings) {
            return Settings.instance;
        }

        this.settingsObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        };

        Object.freeze(this.settingsObject);
        Object.freeze(this);   // people can't modify the instance in which we create it
        Settings.instance = this;
    }

    get(key) {
        return this.settingsObject[key];
    }
}