import beverages from '../data/beverages';
import dairy from '../data/dairy';
import fruits from '../data/fruits';
import grains from '../data/grains';
import proteins from '../data/proteins';
import vegetables from '../data/vegetables';
import FoodEnum from '../consts/FoodEnum';
import { getRandomSubArray } from '../../../utils/arrays';

const getRandomFoods = (FoodType, qty) => {
    switch (FoodType) {
        case FoodEnum.All:
            let allFoods = [].concat(beverages, dairy, fruits, grains, proteins, vegetables);
            return getRandomSubArray(allFoods, qty);
        case FoodEnum.Beverages:
            return getRandomSubArray(beverages, qty);
        case FoodEnum.Dairy:
            return getRandomSubArray(dairy, qty);
        case FoodEnum.Fruits:
            return getRandomSubArray(fruits, qty);
        case FoodEnum.Grains:
            return getRandomSubArray(grains, qty);
        case FoodEnum.Proteins:
            return getRandomSubArray(proteins, qty);
        case FoodEnum.Vegetables:
            return getRandomSubArray(vegetables, qty);
    }
};

export default getRandomFoods;
