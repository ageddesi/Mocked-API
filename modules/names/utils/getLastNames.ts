import {getRandomArrayItem} from "../../../utils/arrays";
import lastNamesList from "../data/lastNamesList";

const getLastNames = (qty: number) : string[] => { 
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        let randomLastName = getRandomArrayItem(lastNamesList);
        namesList.push(randomLastName);
    }

    return namesList;
}

export default getLastNames;