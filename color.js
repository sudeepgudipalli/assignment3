const Body = document.body;
const txt = document.getElementById("h1");
const btn = document.getElementById("bgcolor");

const bgcolor = ['tomato','midnightblue','purple','skyblue','slateblue','mediumseagreen'];

btn.addEventListener('click',change);

function change(){
    const ind = Math.floor(Math.random()*6);
    Body.style.backgroundColor = bgcolor[ind];
    txt.style.color = 'white';
}
