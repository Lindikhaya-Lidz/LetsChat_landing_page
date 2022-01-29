let dropDown = document.querySelector('.feature');
let startButton = document.querySelector('.start');

console.log('javascript loaded');

dropDown.addEventListener('mouseover',()=>{
 document.querySelector('.sub-list').style.display = 'block';
});

startButton.addEventListener('click',()=>{
    alert('redirecting you to the main page.....');
})

dropDown.addEventListener('mouseout',()=>{
 document.querySelector('.sub-list').style.display='none';

})