import './colorPicker.css';

export const createImg = (url) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = url;
  return img;
};