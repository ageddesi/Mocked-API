import ColorSpaces from '../data/color-spaces';
import formatColor from './format-color';
import ColorErrors from '../data/color-errors';

const randomColor = (colorSpace: string, colorFormat: string) => {
    const colorRepresentation = ColorSpaces[colorSpace.toUpperCase()];

    if (!colorRepresentation) {
        throw ColorErrors.InvalidColorSpaceError;
    }

    return formatColor(colorFormat, colorRepresentation);
};

export default randomColor;
