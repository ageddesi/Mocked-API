// jest test for getElement.ts which gets random chemical element

import { getElement } from '../../utils/getElement';
import { faker } from '@faker-js/faker';

jest.mock('@faker-js/faker', () => ({
    faker: {
        science: {
            chemicalElement: jest.fn().mockReturnValue({
                symbol: 'Cl',
                name: 'Chlorine',
                atomicNumber: 17,
            }),
        },
    },
}));

describe('getElement', () => {
    it('should return a random element', () => {
        const element = getElement();
        expect(faker.science.chemicalElement).toHaveBeenCalled();
        expect(element).toEqual({
            symbol: 'Cl',
            name: 'Chlorine',
            atomicNumber: 17,
        });
    });
});
