class Car {
    constructor(model, speedLimit) {
        this.model = model;
        this.speedLimit = speedLimit;
        this.speed = 0;
        var _engine = false;    // no engine property in console.log(car); Car object in console

        function setSpeed(speed) {
            return new Promise((resolve, reject) => {
                if(_engine == false) {
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

        async function drive(speed) {
            _engine = true;
            await this.setSpeed(speed);
            console.log('Driving eith speed ', this.speed);
        }

        async function stop() {
            await this.setSpeed(0);
            _engine = false;
            console.log('Car stopped');
        }

        this.setSpeed = setSpeed;
        this.drive = drive;
        this.stop = stop;
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