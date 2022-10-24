import { ColorSpace } from '../models/color-space.types';

const ColorSpaces: { [key: string]: ColorSpace } = {
    RGB: {
        id: 'rgb',
        getNums: () => {
            return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
        },
    },
    RGBA: {
        id: 'rgba',
        getNums: () => {
            return [...ColorSpaces.RGB.getNums(), Math.round(Math.random() * 100) / 100];
        },
    },

    HSL: {
        id: 'hsl',
        getNums: () => {
            return [Math.floor(Math.random() * 361), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)];
        },
    },
    HSLA: {
        id: 'hsla',
        getNums: () => {
            return [...ColorSpaces.HSL.getNums(), Math.round(Math.random() * 100) / 100];
        },
    },

    HSV: {
        id: 'hsv',
        getNums: () => {
            return ColorSpaces.HSL.getNums();
        },
    },
    HSVA: {
        id: 'hsva',
        getNums: () => {
            return [...ColorSpaces.HSV.getNums(), Math.round(Math.random() * 100) / 100];
        },
    },

    CMYK: {
        id: 'cmyk',
        getNums: () => {
            return [
                Math.floor(Math.random() * 101),
                Math.floor(Math.random() * 101),
                Math.floor(Math.random() * 101),
                Math.floor(Math.random() * 101),
            ];
        },
    },
    CMYKA: {
        id: 'cmyka',
        getNums: () => {
            return [...ColorSpaces.CMYKA.getNums(), Math.round(Math.random() * 100) / 100];
        },
    },
};

export default ColorSpaces;
