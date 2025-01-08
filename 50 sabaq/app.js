
/*-- primitive */
let a = 2
let b = a

/* --refence -- */

const person = {
    name : 'Ahror',
    age : 24
}
const newPerson = {...person}

newPerson.name = 'Doniyor'
newPerson.age = 12
console.log('person',person);
console.log('newPerson',newPerson);
