import { colorPicker, colorPalette } from './colorPicker';
import { createImg } from './createImg';
import { drawBox } from './drawBox';

export const showImg = () => {
  const container = document.querySelector('#app');

  // const urlPhoto = 'https://picsum.photos/300/500';

  const id = Math.floor(Math.random() * 649 + 1)
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

  const img = createImg(url);
  container.appendChild(img);

  img.addEventListener('load', function () {
    const [r, g, b] = colorPicker(img);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    const paleta = colorPalette(img);
    const [rojo,verde,azul] = paleta[6];
    paleta.map( ([r,g,b]) => container.appendChild(drawBox(r,g,b)))
    img.style.backgroundColor = `rgb(${rojo},${verde},${azul})`;
  });

};
