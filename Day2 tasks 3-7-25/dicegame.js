const d = document.getElementById('diceImg');
const p1 = document.getElementById('player1Turn');
const p2 = document.getElementById('player2Turn');
const c1 = document.querySelector('.currentScore');
const c2 = document.querySelector('.cs1');
const n = document.querySelectorAll('button')[0];
const r = document.querySelectorAll('button')[1];
const h = document.querySelectorAll('button')[2];
const t1 = document.querySelector('.player1');
const t2 = document.querySelector('.player2');

let s1, s2, cs, a, play;

function g(x) {
  switch (x) {
    case 'i':
      s1 = 0;
      s2 = 0;
      cs = 0;
      a = 1;
      play = true;
      p1.textContent = 0;
      p2.textContent = 0;
      c1.textContent = 0;
      c2.textContent = 0;
      d.src = 'dice1.jpg';
      t1.style.backgroundColor = '';
      t2.style.backgroundColor = '';
      break;

    case 'r':
      if (!play) break;
      const z = Math.trunc(Math.random() * 6) + 1;
      d.src = `dice${z}.jpg`;
      if (z !== 1) {
        cs += z;
        switch (a) {
          case 1: c1.textContent = cs; break;
          case 2: c2.textContent = cs; break;
        }
      } else {
        switch (a) {
          case 1: c1.textContent = 0; break;
          case 2: c2.textContent = 0; break;
        }
        cs = 0;
        a = a === 1 ? 2 : 1;
      }
      break;

    case 'h':
      if (!play) break;
      switch (a) {
        case 1:
          s1 += cs;
          p1.textContent = s1;
          if (s1 >= 20) {
            t1.style.backgroundColor = 'lightblue';
            play = false;
            break;
          }
          c1.textContent = 0;
          a = 2;
          break;
        case 2:
          s2 += cs;
          p2.textContent = s2;
          if (s2 >= 20) {
            t2.style.backgroundColor = 'lightblue';
            play = false;
            break;
          }
          c2.textContent = 0;
          a = 1;
          break;
      }
      cs = 0;
      break;
  }
}

n.addEventListener('click', () => g('i'));
r.addEventListener('click', () => g('r'));
h.addEventListener('click', () => g('h'));

g('i');
