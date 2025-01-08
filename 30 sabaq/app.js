const myFunck = (callback) => {
    let number = 50
    callback(number)
}
myFunck(function(value) {
    console.log(value);
})