let like = document.querySelector('#like'),
comment = document.querySelector('#comments'),
send = document.querySelector('#send'),
save = document.querySelectorAll('#save'),
ctn = document.querySelector('.container'),
card = document.querySelector('.card'),
likes = document.querySelector('#likes'),
menu = document.querySelector('.menu'),
saved = document.querySelector('#save'),
profile = document.querySelector('#profile');

const like2 = document.querySelector('.like2');

like2.addEventListener('click', ()=>{
    like2.classList.toggle('showlike');
});

const like3 = document.querySelector('.like3');

like3.addEventListener('click', ()=>{
    like3.classList.toggle('showlike');
});
const like4 = document.querySelector('.like4');

like4.addEventListener('click', ()=>{
    like4.classList.toggle('showlike');
});

const like5 = document.querySelector('.like5');

like5.addEventListener('click', ()=>{
    like5.classList.toggle('showlike');
});

like.addEventListener('click', ()=>{
    like.classList.toggle('showlike');
});

likes.addEventListener('click', ()=>{
    likes.classList.toggle('showlikes');
});

saved.addEventListener('click', ()=>{
    saved.classList.toggle('showsave');
});

profile.addEventListener('click', ()=>{
    profile.classList.toggle('account');
});

card.addEventListener('dblclick', ()=>{
    like.classList.toggle('showlike');
});


