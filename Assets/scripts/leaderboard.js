var page=document.querySelector('.m-body-leaderboard');
var cardtitle=page.querySelectorAll('.m-sq-box');
// console.log(cardtitle);
cardtitle.forEach((row)=>{
    row.addEventListener('click',(e)=>{
        row.querySelector('.m-row').classList.toggle('active');
        
    })
})

function rotateangle(id){
    document.getElementById(id).classList.toggle('active');
}