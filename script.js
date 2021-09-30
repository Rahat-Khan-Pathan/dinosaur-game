let check = true;
const jump = () => {
  document.getElementById("dinosaur").classList.add("jump");
  setTimeout(() => {
    document.getElementById("dinosaur").classList.remove("jump");
  }, 500);
};
const pointsUp = ()=> {
    const val = parseInt(document.getElementById("point").innerText);
    document.getElementById("point").innerText = val + 1;
}
const finish = ()=> {
    document.getElementById('block').classList.remove('block');
    document.getElementById('block2').classList.remove('block2');
    check=false;
    gameOver();
}
const start = ()=> {
    document.getElementById('time').innerText=3;
    document.getElementById('over').style.display="none";
    document.getElementById('starts').style.display="flex";
    let i = 2;
    const time = setInterval(() => {
        document.getElementById('time').innerText=i;
        i--;
        if(i<0) {
            gameStart();
            clearInterval(time);
        }
    }, 1000);
}
start();
const gameStart = ()=> {
    document.getElementById('starts').style.display="none";
    document.getElementById('block2').classList.add('block2');
    document.getElementById('block').classList.add('block');
    document.getElementById('point').innerText=0;
    check=true;
    update();
}
const gameOver = ()=> {
    document.getElementById('over').style.display="flex";
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