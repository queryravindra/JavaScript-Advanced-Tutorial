class Monster {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} attacked`);
    }

    walk() {
        console.log(`${this.name} walked`);
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew`);
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam`);
    }
}

const bear = new Monster('bear');
bear.walk();  // bear walked
bear.attack();  // bear attacked

const eagle = new FlyingMonster('eagle');
eagle.walk();  // eagle walked
eagle.attack();  // eagle attacked
eagle.fly();  // eagle flew

const shark = new SwimmingMonster('shark');
shark.walk();  // shark walked
shark.attack();  // shark attacked
shark.swim();  // shark swam