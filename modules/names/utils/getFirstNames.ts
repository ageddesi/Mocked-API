import firstNamesList from "../data/firstNamesList";
import {getRandomArrayItem} from "../../../utils/arrays";

const getFirstNames = (qty: number) : string[] => { 
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        let randomFirstName = getRandomArrayItem(firstNamesList);
        namesList.push(randomFirstName);
    }

    return namesList;
}

export default getFirstNames;