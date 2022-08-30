const neutralFace = document.querySelector('.closed')
const happyFace = document.querySelector('.open')

//Add Event Listener (make it do stuff)

neutralFace.addEventListener('click', () => {
    if(happyFace.classList.contains('open')) {
        happyFace.classList.add('active');
        neutralFace.classList.remove('active');
    }    
})


happyFace.addEventListener('click', () => {
    if(neutralFace.classList.contains('closed')) {
        neutralFace.classList.add('active');
        happyFace.classList.remove('active');
    }    
})