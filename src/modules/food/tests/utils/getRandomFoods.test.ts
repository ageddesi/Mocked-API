import getRandomFoods from '../../utils/getRandomFoods';
import FoodEnum from '../../consts/FoodEnum';

describe('get random fruits', () => {
    it('should return a list of random fruit items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Fruits, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random dairy', () => {
    it('should return a list of random dairy items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Dairy, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random Vegetables', () => {
    it('should return a list of random Vegetables items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Vegetables, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random Grains', () => {
    it('should return a list of random Grains items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Grains, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random Protein', () => {
    it('should return a list of random Protein items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Protein, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random Beverages', () => {
    it('should return a list of random Beverages items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Beverages, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random items for all food categories', () => {
    it('should return a list of random food items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.All, 4);
        expect(res.length).toBe(amount);
    });
});
