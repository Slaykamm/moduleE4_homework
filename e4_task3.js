//Написать функцию, которая создает пустой объект, но без прототипа.


function creationPrototypeLessObject() {
    const func = Object.create(null);
    return func
}

outPutObject = creationPrototypeLessObject()
console.log(`Tests with object method. Result: ${Object.getPrototypeOf(outPutObject)}`)
