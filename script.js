let check = true;
const setDisplay = (id,dis)=> {
    document.getElementById(id).style.display=dis;
}
const setText = (id,text)=> {
    document.getElementById(id).innerText = text;
}
const addClass = (id,cls)=> {
    document.getElementById(id).classList.add(cls);
}
const removeClass = (id,cls)=> {
    document.getElementById(id).classList.remove(cls);
}
const jump = () => {
    addClass('dinosaur','jump');
  setTimeout(() => {
      removeClass('dinosaur','jump');
  }, 500);
};
const pointsUp = ()=> {
    const val = parseInt(document.getElementById("point").innerText);
    document.getElementById("point").innerText = val + 1;
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
        setText('point',0);
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
  if (blockLeft >= 0 && blockLeft < 55 && dinosaurTop >= 240) {
    finish();
  } else if (block2Left >= 0 && block2Left < 55 && dinosaurTop >= 240) {
    finish();
  } 
}, 10);
let update =()=>{
    setInterval(() => {
        if(check) pointsUp();
    }, 100);    
}