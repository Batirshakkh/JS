// arrow functions

// const calcArea = raduis =>  3.14 * raduis **2

// const area = calcArea(5);

// console.log(area); 


// const greet = (ism) => {
//     return `Salom ${ism}`
// }

// const result = greet('Batyr');

// console.log(result);


// const bill  = function(product , tax){
//     let total = 0
//     for(let i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax
//     }
//     return total
// }


const bill = (product, tax) => {
    let total = 0
    for (let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax
    }
    return total
}

const result = bill([10, 13, 45], 0.2);

console.log(result);