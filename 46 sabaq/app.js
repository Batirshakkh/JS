// setTimeout(() =>{
//     console.log('Hello World');
    
// },1000);
let a = 0
const timer = setInterval(()=>{
    a++
    console.log(a);
    
    
} , 1000)

setTimeout(()=>{
    clearInterval(timer)
},10000)