const getTodos = (resource) => {    
    
    return new Promise ((resolve,reject) =>{
        const request = new XMLHttpRequest();
     request.addEventListener('readystatechange', (e) => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);  // To'g'ri ma'lumotni olish
            resolve(data)
        } else if (request.readyState === 4) {
            reject('Maglumat olishni iloji yoq !!!');  // Xatolik bo'lsa
        }
    });

    request.open('GET', resource); 
    request.send();
    })  
    
      
};
getTodos('./todos/Batyr.json').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
    
})


//promice

// const internat = true

// const getData =()=>{
//     return new Promise((resolve,reject)=>{
        
//         if(internat){
//             resolve('some data')
//         }
//         else{
//             reject('Some error')
//         }
//     })
// }
// getData().then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
    
// })