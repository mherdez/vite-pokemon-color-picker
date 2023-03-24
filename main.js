import './style.css'
import { showImg } from './src/components/showImg';

// const app = document.querySelector('#app');
const app = document.querySelector('#app');
  const container = document.createElement('div');
  container.classList.add('container');
  app.appendChild(container);

new Array(1010).fill(null).forEach(( pokemon, index) => {
  showImg(index + 1);
})





