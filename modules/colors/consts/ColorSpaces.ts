interface ColorSpace {
  id: string;
  getNums: () => number[];
}

const ColorSpaces: {[key: string]: ColorSpace} = {
  RGB: {
    id: 'rgb',
    getNums: () => {
      return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
      ]
    }
  },
  RGBA: {
    id: 'rgba',
    getNums: () => {
      return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.round(Math.random() * 100) / 100,
      ]
    }
  },

  HSL: {
    id: 'hsl',
    getNums: () => {
      return [
        Math.floor(Math.random() * 361),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
      ]
    }
  },
  HSLA: {
    id: 'hsla',
    getNums: () => {
      return [
        Math.floor(Math.random() * 361),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.round(Math.random() * 100) / 100,
      ]
    }
  },

  HSV: {
    id: 'hsv',
    getNums: () => {
      return [
        Math.floor(Math.random() * 361),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
      ]
    }
  },
  HSVA: {
    id: 'hsva',
    getNums: () => {
      return [
        Math.floor(Math.random() * 361),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.round(Math.random() * 100) / 100,
      ]
    }
  },

  CMYK: {
    id: 'cmyk',
    getNums: () => {
      return [
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
      ]
    }
  },
  CMYKA: {
    id: 'cmyka',
    getNums: () => {
      return [
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.round(Math.random() * 100) / 100,
      ]
    }
  },
}

export type { ColorSpace };

export default ColorSpaces;
