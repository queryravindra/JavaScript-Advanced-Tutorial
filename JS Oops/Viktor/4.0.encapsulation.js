// 1) Encapsulated all the logic that is needed for car instance

class Car {
    constructor(model, speedLimit) {
        this.model = model;
        this.speedLimit = speedLimit;
        this.speed = 0;
        this.engine = false;
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
        // await car.drive(130);
        await car.drive(30);

        // we would like to make this car safe (privacy matters) to use
        // car.engine = false;   // we are accessing these and we are manipulating these
        // car.speed = 20;     // we are accessing these and we are manipulating these

        console.log('driving');
    } catch(e) {
        console.log(e);
    }
    await car.stop();
    console.log('Stopped');
}

testDrive();




// 2) About privacy