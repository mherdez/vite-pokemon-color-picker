
import ColorThief  from 'colorthief/dist/color-thief.modern.mjs'

// const colorThief = new ColorThief();

// export const colorPicker = ( photo ) => {
//   return colorThief.getColor( photo );
// }

export const colorPicker = ( photo ) => new ColorThief().getColor( photo );

export const colorPalette = ( photo ) => new ColorThief().getPalette(photo);

