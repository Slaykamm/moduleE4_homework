// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


// функция. проверяю на всякий раздельно собвственные свойства или наследованные.
function searchMatching(searchString, house){

    for (let prop in house){
        if (searchString === prop){
            if (house.hasOwnProperty(prop)){
//                console.log(`House get property ${searchString}, and it is OWN`);
                return true
            }
            else {
//                console.log(`House get property ${searchString}, but it is COMMON`)
                return true
            }
        }
    }
    return false
}


// тут мой объект. наследую свойства.
const country = {
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


// тут тестим функцию

let test1 = searchMatching('street', myHouse)
console.log(test1)
let test2 = searchMatching('numberOfFlats', myHouse)
console.log(test2)
let test3 = searchMatching('haveNotSuch', myHouse)
console.log(test3)
