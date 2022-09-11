import { getRandomDate } from "../../../utils/dates";
import { randomRating } from "../../../utils/numbers";
import getFullNames from "../../names/utils/getFullNames";

const productReviews = [

    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "The only drink I will ever need.",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "I couldn't have managed my 36 hour stint on Fallout 76, without the 4 litres of Super Gamer Juice I drank. My eyes burn and my spine is permanently damaged, but I levelled up so much",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "I can do this all day... thanks to Super Gamer Juice",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "After just a few sips I was that great at a game I was signed to an E Sports team",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "The flavour was not as I was expecting, but none the less I was instantly addicted. Can't get deliveries quick enough",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    }

]

export default productReviews;