// 2) About privacy

class Car {
    constructor(model, speedLimit) {
        this.model = model;
        this.speedLimit = speedLimit;
        this.speed = 0;
        this._engine = false;    // _ -> it is private
    }

    set engine(val) {
        if(this.speed === 0) {
            this._engine = val;
        }
    }

    get engine() {
        return this._engine;
    }

    setSpeed(speed) {
        return new Promise((resolve, reject) => {
            if(this.engine == false) {
                reject('Please turn on engine');
            } else if(this.speedLimit < speed) {
                reject('Speed should be less than ' + this.speedLimit);
            } else {
                const interval = setInterval(() => {
                    if(speed > this.speed) {
                        this.speed++;
                    } else if (speed < this.speed) {
                        this.speed--;
                    } else {
                        clearInterval(interval);
                        resolve(speed);
                    }

                    console.log(this.speed);
                })
            }
        })
    }

    async drive(speed) {
        this.engine = true;
        await this.setSpeed(speed);
        console.log('Driving eith speed ', this.speed);
    }

    async stop() {
        await this.setSpeed(0);
        this.engine = false;
        console.log('Car stopped');
    }
}

async function testDrive() {
    const car = new Car('Tesla', 100);
    try {
        await car.drive(30);
        console.log('driving');
    } catch(e) {
        console.log(e);
    }
    await car.stop();
    console.log('Stopped');
    console.log(car);
}

testDrive();