
const backImg = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const randImg = backImg[Math.floor((Math.random())*backImg.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `./img/${randImg}`;
//document.body.appendChild(bgImage);

 
document.body.style.backgroundImage='url(../img/'+randImg+ ')';

