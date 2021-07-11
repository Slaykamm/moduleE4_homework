// Задание 5.
//
// Переписать консольное приложение из предыдущего юнита на классы.

class Electroappliance {
    constructor() {
        this.workignVoltage = 220;
    }
    switchOn = function(){
        console.log(`Switch On appliance`);
    }
    switchOff = function() {
        console.log(`Switch OFF appliance`);
    }
    getName = function() {
        console.log(`Appliance name is ${this.name}`);
    }
    getVoltage = function() {
        console.log(`Appliance Voltage is ${this.workignVoltage}`);
    }
}

class WashingAppliance extends Electroappliance {
    constructor (name, amperage, waterConsumsion, loadingWeight){
        super();
        this.name = name;
        this.amperage = amperage;
        this.waterConsumsion = waterConsumsion;
        this.loadingWeight = loadingWeight;
    }

    getPower = function() {
        let power = this.workignVoltage * this.amperage
        //заодно проверим корректность ввода
        if (power <= 0 ){
            console.log("Mistake in data"
            )}
        else if (power > 0 && power <1){
            console.log(`The power of your ${this.name} is ${power*1000} mW`)
        }
        else if (power > 1 && power <1000){
            console.log(`The power of your ${this.name} is ${power} W`)
        }
        else {console.log(`The power of your ${this.name} is ${power/1000} kW`)}
    }

    getWaterConsumtion = function() {
        console.log(`The water consumption of this washing model ${this.name} is ${this.waterConsumsion} per hour`)
    }

    getLoadingWeight = function() {
        console.log(`The loading weight of this washing model ${this.name} is ${this.loadingWeight} `)
    }

}

class LightAppliance extends Electroappliance {
    constructor(name, bulbConnection, numberOfBulbs) {
        super();
        this.name = name;
        this.bulbConnection = bulbConnection;
        this.numberOfBulbs = numberOfBulbs;
    }

    getPower = function(bulbLightPower) {
        let power = bulbLightPower * this.numberOfBulbs

        if (power <= 0 ){
            console.log("Mistake in data"
            )}
        else if (power > 0 && power <1){
            console.log(`The power of your ${this.name} is ${power*1000} mW`)
        }
        else if (power > 1 && power <1000){
            console.log(`The power of your ${this.name} is ${power} W`)
        }
        else {console.log(`The power of your ${this.name} is ${power/1000} kW`)}

    }
    getBulbConnection = function () {
        console.log(`This Lamp require bulbs with connection ${this.bulbConnection} `)

    }

    getLightPower = function (bulbLightPower) {
        //сила света на ламп накаливания +- считается мощность * 10 * кол-во ламп
        console.log(`Light power of your lamp is ${bulbLightPower * 10 * this.numberOfBulbs} Lm`)

    }
}

const bosch = new WashingAppliance('BOSCH KF100', 10, '15L ', '5 kg');
const homeLamp = new LightAppliance('HomeLamp','E27', 3);



console.log("--------------------------first appliance------------------")
bosch.getName()
bosch.getVoltage()
bosch.getPower()
bosch.getWaterConsumtion()
bosch.getLoadingWeight()
bosch.switchOn()


console.log("----------------------second appliance-------------------------")
homeLamp.getName()    //2 метода родительского класса
homeLamp.getVoltage()
homeLamp.getPower(1000)
homeLamp.getBulbConnection()
homeLamp.getLightPower(1000)
homeLamp.switchOff()

