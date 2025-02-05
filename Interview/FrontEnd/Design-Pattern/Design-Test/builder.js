class Car {
    constructor(){
        this.wheels = 4;
        this.color = 'default';
        this.engine = 'default';
    }

    describe(){
        reutnr `
        This is a ${this.color} car with a ${this.engine} engine and ${this.wheels} wheels.
        `
    }
}


class Builder{

    constructor(){
        this.car = new Car();
    }

    wheelChange(num){
        this.car.wheels = num;
        return this;
    }

    setEngine(engine){
        this.car.engine = engine;
        return this
    }

    setColor(color){
        this.car.color = color;
        return this
    }

    build(){
        return this.car
    }
}

class CarDirector{
    constructor(builder){
        this.builder = builder
    }

    constructorSuperCar(){
        return this.builder.setColor('red').setEngine('high').wheelChange(10).build()
    }

    constructorFamilyCar(){
        return this.builder.setColor('black').setEngine('middle').wheelChange(4).build()
    }
}

const builder = new Builder()
const myCar = new CarDirector(builder);

const fc = myCar.constructorFamilyCar()
const sc = myCar.constructorSuperCar()

console.log(fc, sc)