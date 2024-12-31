'use strict'

const quizData =[
    {
        q:"Which of the following are signs that you might be being stalked by something unnatural?",
        ans:
        [
            {opt:`Hearing footsteps behind you when no one is there`,marks:3},{opt:` Finding random objects moved in your home with no explanation`,marks:4},{opt:`Seeing shadows that don't belong to anything`,marks:2},{opt:'Having strange dreams about a person you’ve never met',marks:1},{img:'image5.jpeg'}
        ]
    },
    {
        q:"What would you do if you received an anonymous letter with your name on it, warning you not to go near your reflection?",
        ans:
        [
            {opt:'Throw it away and ignore it',marks:2},{opt:'Investigate the reflection to see if anything is different',marks:1},{opt:'Lock all mirrors in your house',marks:3},{opt:'Seek out a paranormal expert for advice',marks:4},{img:'image7.jpeg'}
        ]
    },
    {
        q:"If you noticed a figure watching you from a dark corner of your room, what would you do?",
        ans:
        [
            {opt:' Ignore it, assuming it’s your imagination',marks:2},{opt:'Confront it and ask who they are',marks:3},{opt:'Lock the door and hide under the bed',marks:4},{opt:'Turn on the lights to see if it disappears',marks:1},{img:'img15.jpeg'}
        ]
    },
    {
        q:"Which of these would be signs that you’ve accidentally opened a doorway to another dimension?",
        ans:
        [
            {opt:'Time seems to pass strangely and inconsistently',marks:1},{opt:' You find unfamiliar symbols or writing in your house',marks:2},{opt:'People you know start acting like strangers',marks:4},{opt:'Objects around you begin to change shape or color',marks:3},{img:'img14.jpeg'}
        ]
    },
    {
        q:"What might you do if you found a series of cryptic messages written in blood in your own handwriting?",
        ans:
        [
            {opt:'Panic and try to erase the messages',marks:4},{opt:'Attempt to decipher the messages for clues',marks:3},{opt:'Contact the police and report it',marks:2},{opt:'Search for signs of someone breaking into your home',marks:1},{img:'img9.jpeg'}
        ]
    },
    {
        q:"If you heard a voice calling your name in the middle of the night but saw no one there, what could it mean?",
        ans:
        [
            {opt:'It’s a ghost trying to communicate with you',marks:1},{opt:'It’s a trick of the mind, driven by sleep deprivation',marks:3},{opt:'It’s a warning from an entity lurking nearby',marks:2},{opt:'Someone is hiding in your house and trying to lure you out',marks:4},{img:'img10.jpeg'}
        ]
    },
    {
        q:"What would you do if you found an old photo album in your attic with pictures of you in places you’ve never been?",
        ans:
        [
            {opt:'Panic and destroy the album',marks:2},{opt:' Examine the photos carefully to look for clues',marks:1},{opt:'Contact family or friends to confirm the photos’ origins',marks:3},{opt:'Try to retrace your steps to understand how they were taken',marks:4},{img:'img11.jpeg'}
        ]
    }
]

let totalMarks = 0;
let qNo = 0;

function loadData(){
    const question=document.querySelector('.question');
    question.innerText=quizData[qNo].q;

    const answers=document.querySelectorAll('.opt');
    answers.forEach(function(item, index) {
        item.innerText=quizData[qNo].ans[index].opt;
    });

    const bg=document.querySelector('body');
    bg.style.backgroundImage=`url('${quizData[qNo].ans[4].img}')`
}


loadData();

function selectedAns(i){
    const question=quizData[qNo];
    const selection=question.ans[i];

    totalMarks+=selection.marks;
    console.log(totalMarks);
    if(qNo>5){
        localStorage.setItem('score', totalMarks);
        window.location.href="index3.html";
    }
    qNo+=1;

    loadData();
    
}

let choice=document.querySelectorAll('.opt');
choice.forEach(function(item,index){
    item.addEventListener('click',function(){
            selectedAns(index);
             
    })
})
