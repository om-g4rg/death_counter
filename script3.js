'use strict'

let score = localStorage.getItem('score');

let life=(1+(((score-7)*(29))/17))*365*24*60*60;

const daysLeft=document.querySelector('.counter');

const timer=setInterval(function() {
    const year = Math.floor(life/31536000);
    const rSAY = life%31536000;
    const months=Math.floor(rSAY/2629800);
    const rSAM=rSAY%2629800;
    const days=Math.floor(rSAM/86400);
    const rSAD=life%86400;
    const hr=Math.floor(rSAD/3600);
    const rSAH= rSAD%3600;
    const min=Math.floor((rSAH%3600)/60);
    const sec= Math.floor(rSAH%60);

    daysLeft.innerText=`${year}:${months}:${days}:${hr}:${min}:${sec}`;

    life--;

}, 1000);

console.log(score);