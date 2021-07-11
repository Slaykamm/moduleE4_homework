// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств.
// Данная функция не должна возвращать значение.

// функция
function checkHouseKeys(keysCheckingHouse){
    for (let key in keysCheckingHouse){
        if (keysCheckingHouse.hasOwnProperty(key)){
            console.log(`For checking house Key is ${key} - value ${keysCheckingHouse[key]}`);
        }
    }
}

// наследую свойства дома по адресу. создаю объект
const country ={
    country: 'Russia',
}

const region = Object.create(country)
    region.region = 'Volgogradskaya'

const city = Object.create(region)
    city.city = 'Uryupinsk'

const street =  Object.create(city)
    street.street = 'Partizanov'

const myHouse = Object.create(street)
    myHouse.levelage = 4
    myHouse.numberOfFlats = 5
    myHouse.number = 7
    myHouse.flat1 = 'Ivanovi'
    myHouse.flat2 = 'Petrovi'
    myHouse.flat3 = 'Sidorovi'
    myHouse.flat4 = 'Smirnovi'
    myHouse.flat5 = 'Petrosyan'



// тестю функцию
checkHouseKeys(myHouse);

