import ColorErrors from '../consts/ColorErrors';
import type { ColorSpace } from '../consts/ColorSpaces';

const formatColor = (format: string, colorRepresentation: ColorSpace) => {
    switch (format) {
        case 'hex':
            if (colorRepresentation.id.endsWith('a')) {
                throw ColorErrors.CannotConvertToHexWithAlphaError;
            }

            return colorRepresentation
                .getNums()
                .map((color) => color.toString(16).padStart(2, '0'))
                .join('');
        case 'decimal':
            return JSON.stringify(colorRepresentation.getNums());
        case 'css':
            const colorParams = colorRepresentation.getNums();
            const color = colorParams.join(', ');

            return `${colorRepresentation.id}( ${color} )`;
        default:
            throw ColorErrors.InvalidFormatError;
    }
};

export default formatColor;
