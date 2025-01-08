//localStorge 
const names = JSON.parse(localStorage.getItem('names')) ? JSON.parse(localStorage.getItem('names')) :
[]
if (names.length > 0) {
    names.forEach((name) => {
        console.log(name);
    });
} else {
    console.log('Hech qanday ism yo‘q');
}

//setItem
// const name = 'Batyr'
// let age = 13
// localStorage.setItem('name',name)
// localStorage.setItem('age',age)
// //getItem


// console.log(localStorage.getItem('age'));
//clear

// localStorage.clear()



// array localStorege

// const names = ['Ahror','Batyr','Babur']
// localStorage.setItem('name',JSON.stringify(names))

// const getNames = JSON.stringify(localStorage.getItem('names'))
// console.log(typeof getNames);
