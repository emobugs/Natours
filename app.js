// const mainBtn = document.querySelector('.btn');

// function clickedState (){
//     mainBtn.style.transform = "translateY(-1px)";
//     setTimeout(function(){
//         mainBtn.style.transform = "translateY(-3px)";
//     },150)
// }

// function hoverState (){
//         mainBtn.style.transform = "translateY(-3px)";
// }

// function blurState(){
//     setTimeout(function(){
//         mainBtn.style.transform = "translateY(0)";
//     },100)
// }

// mainBtn.addEventListener('click', clickedState);
// mainBtn.addEventListener('mouseover', hoverState);
// mainBtn.addEventListener('mouseout', blurState);

const btnText = document.querySelector('.btn-text');

btnText.addEventListener('click', (e) => {
    e.preventDefault();
})