import firstNamesList from "../data/firstNamesList";
import lastNamesList from "../data/lastNamesList";
import {getRandomArrayItem} from "../../../utils/arrays";

const getFullNames = (qty: number) : string[] => { 
    const namesList = [];

    for (let index = 0; index < qty; index++) {
        let randomFirstName = getRandomArrayItem(firstNamesList);
        let randomLastName = getRandomArrayItem(lastNamesList);
        namesList.push(`${randomFirstName} ${randomLastName}`);
    }

    return namesList;
}

export default getFullNames;