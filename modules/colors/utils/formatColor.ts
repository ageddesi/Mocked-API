import type { ColorSpace } from '../consts/ColorSpaces';

const formatColor = (format: string, colorRepresentation: ColorSpace) => {
  switch (format) {
    case "hex":
      if (colorRepresentation.id.endsWith('a')) {
        throw new Error("Cannot convert to hex with alpha");
      }

      return colorRepresentation
        .getNums()
        .map((color) => color.toString(16).padStart(2, "0"))
        .join("");
    case "decimal":
      return JSON.stringify(
        colorRepresentation.getNums()
      );
    case "css":
      const colorParams = colorRepresentation.getNums();
      const color = colorParams.join(", ");

      return `${colorRepresentation.id}( ${color} )`;
    default: 
      throw new Error("Invalid format");
  }
}

export default formatColor;
