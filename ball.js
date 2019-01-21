'use strict';

{
  const start = document.getElementById('start');
  const ball = document.getElementById('ball');
  const area = document.getElementById('area');
  const docHeight = document.documentElement.clientHeight;
  const docWidth = document.documentElement.clientWidth;

  start.addEventListener('click', () => {
    let randTop = Math.random() * docHeight;
    let randLeft = Math.random() * docWidth;
    ball.style.top = `${randTop}px`;
    ball.style.left = `${randLeft}px`;

  });
}
