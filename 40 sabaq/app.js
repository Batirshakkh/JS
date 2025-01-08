document.addEventListener('keyup', (e)=>{

    if(e.key == 'm' && e.ctrlKey) {
        console.log('Goool');
        
    }

    console.log('code:',e.code);
    console.log('key:',e.key);
    console.log('keyCode:',e.keyCode);
})
document.addEventListener('keydown', (e)=>{

    if(e.key == 'm' && e.ctrlKey) {
        console.log('Goool');
        
    }

    console.log('code:',e.code);
    console.log('key:',e.key);
    console.log('keyCode:',e.keyCode);
})