document.addEventListener('keydown', (e)=>{
    
    const keyNumber = e.keyCode;
    const keyAudio = document.querySelector('audio[data-key="'+keyNumber+'"]');
    const keyEl = document.querySelector('.key[data-key="'+keyNumber+'"]');
    
    if (keyAudio !== null) {
        keyAudio.currentTime = 0;
        keyAudio.play();
        keyEl.classList.add('playing');
        keyAudio.addEventListener('ended', ()=>keyEl.classList.remove('playing'));
    }
    
});



// var keys = document.querySelectorAll('key');

// keys.forEach(key=>{
//     key.addEventListener('click', (e)=>{
//         e.preventDefault();
//         console.log(e);
//         // const keyNumber = e.a
//     });
// });

// keys.addEventListener('click', (e)=>{
//   e.preventDefault();

//   keyNumber = e.attr('data-key');
// });

// document.addEventListener();