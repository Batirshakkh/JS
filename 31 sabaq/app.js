// Object
const user = {
    name: 'ahror',
    age : 14,
    location:'Fargona',
    email:'ahrortecher@gmail.com',
    lang :['uzbek','russia'],
}
console.log(user);
console.log(user.email);

user.age = 15

console.log(user.age);


console.log(user['location']);

user['name'] = 'ahrortecher'
console.log(user['name']);

console.log(typeof user);
