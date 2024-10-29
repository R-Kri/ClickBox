function getCurrentTime(){
    const now = new Date();
    return now.toLocaleTimeString();
}

function handleClickBox(event){
    const box = event.currentTarget;
    box.textContent = getCurrentTime();
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', handleClickBox)
})