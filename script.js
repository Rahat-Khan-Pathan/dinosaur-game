let check = true;
const setDisplay = (id,dis)=> {
    document.getElementById(id).style.display=dis;
}
const setText = (id,text)=> {
    document.getElementById(id).innerText = text;
}
const getText = id=> {
    return parseInt(document.getElementById(id).innerText);
}
const addClass = (id,cls)=> {
    document.getElementById(id).classList.add(cls);
}
const removeClass = (id,cls)=> {
    document.getElementById(id).classList.remove(cls);
}
const updateHighest = ()=> {
    const points = getText('point');
    const highest = getText('highest');
    setText('highest',Math.max(points,highest));
    setText('point',0);
}
const jump = () => {
    addClass('dinosaur','jump');
  setTimeout(() => {
      removeClass('dinosaur','jump');
  }, 700);
};
const pointsUp = ()=> {
    const val = getText('point');
    setText('point',val+1);
}
const finish = ()=> {
    removeClass('block','block');
    removeClass('block2','block2');
    check=false;
    gameOver();
}
const firstClick = () => {
    setDisplay('firstClick','none');
}
const start = ()=> {
    firstClick();
    updateHighest();
    setText('time',3);
    setDisplay('over','none');
    setDisplay('starts','flex');
    let i = 2;
    const time = setInterval(() => {
        setText('time',i);
        i--;
        if(i<-1) {
            clearInterval(time);
            gameStart();
        }
    }, 1000);
}
const gameStart = ()=> {
    setDisplay('starts','none');
    setTimeout(() => {
        addClass('block','block');
        addClass('block2','block2');
        check=true;
        update();
    }, 1000);
}
const gameOver = ()=> {
    setDisplay('over','flex');
}
document.addEventListener("touchstart", function () {
    jump();
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      jump();
    }
  });
let checkDead = setInterval(() => {
  let dinosaurTop = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  let block2Left = parseInt(
    window.getComputedStyle(block2).getPropertyValue("left")
  );
  if (blockLeft >= 0 && blockLeft < 55 && dinosaurTop >= 225) {
    finish();
  } else if (block2Left >= 0 && block2Left < 55 && dinosaurTop >= 225) {
    finish();
  } 
}, 10);
let update =()=>{
    setInterval(() => {
        if(check) pointsUp();
    }, 100);    
}