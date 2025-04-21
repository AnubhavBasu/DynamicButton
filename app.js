// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <title>Fully Dynamic DOM Button</title>
      <style>
        body { margin:0; padding:0; }
        #buttonContainer {
          position: relative;
          width: 100%;
          height: 100vh;
        }
        /* any button inside container is absolute */
        #buttonContainer button {
          position: absolute;
        }
      </style>
    </head>
    <body>
      <div id="buttonContainer"></div>
      <script>
        const container = document.getElementById('buttonContainer');

        function getRandomPosition(bw = 100, bh = 30) {
          const w = container.clientWidth;
          const h = container.clientHeight;
          return {
            x: Math.floor(Math.random() * (w - bw)),
            y: Math.floor(Math.random() * (h - bh))
          };
        }

        function rebuildDOM() {
          // 1) clear out everything
          container.innerHTML = '';

          // 2) random wrapper depth between 1 and 5
          const depth = Math.floor(Math.random() * 5) + 1;
          let parent = container;
          for (let i = 0; i < depth; i++) {
            const wrap = document.createElement('div');
            parent.appendChild(wrap);
            parent = wrap;
          }

          // 3) create a fresh button
          const btn = document.createElement('button');
          const rand = Math.floor(Math.random() * 100000);
          btn.id = 'button' + rand;
          btn.setAttribute('data-locator', 'locator' + rand);
          btn.className = 'dyn-' + rand;
          btn.textContent = 'Click Me';

          // 4) add to deepest wrapper
          parent.appendChild(btn);

          // 5) position & reset background
          const { x, y } = getRandomPosition();
          btn.style.left = x + 'px';
          btn.style.top  = y + 'px';
          document.body.style.backgroundColor = 'white';

          // 6) click handler → blue background
          btn.addEventListener('click', () => {
            document.body.style.backgroundColor = 'blue';
          });
        }

        // initial build + every 10 seconds
        rebuildDOM();
        setInterval(rebuildDOM, 10000);
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});
