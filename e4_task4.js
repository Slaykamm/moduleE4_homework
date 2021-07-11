//Задание 4.
//
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
//
// План:
// // Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//
// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.


function Electroappliance() {

    this.workignVoltage = 220

}
Electroappliance.prototype.switchOn = function() {
    console.log(`Switch On appliance`)
}

Electroappliance.prototype.switchOff = function() {
    console.log(`Switch OFF appliance`)
}

// этот метод тоже есть у всех приборов, потому он тут.
Electroappliance.prototype.getName = function() {
    console.log(`Appliance name is ${this.name}`)
}

Electroappliance.prototype.getVoltage = function() {
    console.log(`Appliance Voltage is ${this.workignVoltage} V`)
}

// стиралка

WashingAppliance.prototype = new Electroappliance()
function  WashingAppliance (name, amperage, waterConsumsion, loadingWeight){
            this.name = name,
            this.amperage = amperage,
            this.waterConsumsion = waterConsumsion,
            this.loadingWeight = loadingWeight
}
// описываем методы стиралки

WashingAppliance.prototype.getPower = function() {
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

WashingAppliance.prototype.getWaterConsumtion = function() {
    console.log(`The water consumption of this washing model ${this.name} is ${this.waterConsumsion} per hour`)
}

WashingAppliance.prototype.getLoadingWeight = function() {
    console.log(`The loading weight of this washing model ${this.name} is ${this.loadingWeight} `)
}



// описываем лампу

LightAppliance.prototype = new Electroappliance()

function LightAppliance(name, bulbConnection, numberOfBulbs){
    this.name = name,
    this.bulbConnection = bulbConnection,
    this.numberOfBulbs = numberOfBulbs
}

// определяю метод. теперь считаю мощность не через амперы, а через мощность лампочек в лампе
LightAppliance.prototype.getPower = function(bulbLightPower) {
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

LightAppliance.prototype.getBulbConnection = function () {
    console.log(`This Lamp require bulbs with connection ${this.bulbConnection} `)

}

LightAppliance.prototype.getLightPower = function (bulbLightPower) {
    //сила света на ламп накаливания +- считается мощность * 10 * кол-во ламп
    console.log(`Light power of your lamp is ${bulbLightPower * 10 * this.numberOfBulbs} Lm`)

}


// создаю экземпляры
const bosch = new WashingAppliance('BOSCH KF100', 10, '15L ', '5 kg');
const homeLamp = new LightAppliance('HomeLamp','E27', 3);


//тестирую методы объектов
console.log("--------------------------first appliance------------------")
bosch.getName()
bosch.getVoltage()
bosch.getPower()
bosch.getWaterConsumtion()
bosch.getLoadingWeight()
bosch.switchOn()


console.log("----------------------second appliance-------------------------")
homeLamp.getName()
homeLamp.getVoltage()
homeLamp.getPower(1000)
homeLamp.getBulbConnection()
homeLamp.getLightPower(1000)
homeLamp.switchOff()

