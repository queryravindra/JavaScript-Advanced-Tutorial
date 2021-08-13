class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skils = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN) {
        if(/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstName, this.lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }

    learn(skill) {
        this.skils.push(skill);
    }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

console.log(Person.amount);

const ravindra = new Person({
    firstName: 'Ravindra',
    lastName: 'Reddy',
    job: new Job('Youtube', 'developer', 200000)
});

console.log(Person.amount);

const rohit = new Person({
    firstName: 'Rohit',
    lastName: 'Veshala',
    job: new Job('HDFC', 'Manager', 1000000)
});

console.log(Person.amount);

ravindra.fullName = "Phanindra Reddy";

ravindra.learn('Es6');

rohit.learn('MBA');

ravindra.learn('Es7');

console.log(ravindra, rohit); 

console.log(ravindra instanceof Person, rohit instanceof Job);