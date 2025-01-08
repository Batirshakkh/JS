const showBtn = document.getElementById('show-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// add classlisthidden

const addClassList = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//add remeve classlist
const removeClassList = () =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//show
showBtn.addEventListener('click', () =>{
    removeClassList()
});
//close
closeBtn.addEventListener('click', () => {
    addClassList()
});
// overlay
overlay.addEventListener('click', () => {
    addClassList()
});
document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape'){
        addClassList()
    }
});


