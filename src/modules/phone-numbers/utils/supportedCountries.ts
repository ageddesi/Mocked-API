import countryNumberData from '../consts/countryNumberData';

const supported = Object.keys(countryNumberData)
    .filter((key) => countryNumberData[key]['format'] !== undefined)
    .map((key) => ({ [key]: countryNumberData[key]['name'] }));

export default supported;
