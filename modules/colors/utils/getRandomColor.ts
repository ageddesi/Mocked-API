import ColorSpaces from '../consts/ColorSpaces';
import formatColor from './formatColor';

const getRandomColor = (colorSpace: string, colorFormat: string) => {
  const colorRepresentation = ColorSpaces[colorSpace.toUpperCase()];
  
  if (!colorRepresentation) {
    throw new Error("Invalid color space");
  }

  return formatColor(colorFormat, colorRepresentation);
}

export default getRandomColor;
