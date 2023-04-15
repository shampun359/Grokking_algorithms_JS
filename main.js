const cube = document.querySelector('.cube');
let x = 0;
let y = 0;

function rotateCube() {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  requestAnimationFrame(rotateCube);
}

document.addEventListener('mousemove', event => {
  x = -(event.pageY - window.innerHeight / 2) / 10;
  y = (event.pageX - window.innerWidth / 2) / 10;
});

rotateCube();