import ColorSpaces from '../consts/ColorSpaces';
import formatColor from './formatColor';
import ColorErrors from '../consts/ColorErrors';

const getRandomColor = (colorSpace: string, colorFormat: string) => {
    const colorRepresentation = ColorSpaces[colorSpace.toUpperCase()];

    if (!colorRepresentation) {
        throw ColorErrors.InvalidColorSpaceError;
    }

    return formatColor(colorFormat, colorRepresentation);
};

export default getRandomColor;
