const button = document.querySelector('button');
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

button.addEventListener('click', () => {

    const li = document.createElement('li')
    li.textContent = 'Something new text 😁'
    ul.appendChild(li);
})



// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
        // e.target.remove();
//         console.log('clicked LI');
//         e.stopPropagation()
        
//     })
// })

ul.addEventListener('click', (e) => {
    if(e.target.nodeName == "LI"){
        e.target.remove();
    }    
})