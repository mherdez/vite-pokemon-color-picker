import './colorPicker.css'

export const drawBox = ( r,g,b ) => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = `rgba(${r},${g},${b})`
  return box
}