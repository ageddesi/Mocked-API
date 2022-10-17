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
    },
    {
        productName: "Golden-arm",
        productId: 2,
        message: "An amazing sequel to an amazing classic!  Great introduction to the new N65 console.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming']
    },
    {
        productName: "Golden-arm",
        productId: 2,
        message: "Not nearly as good as the original, but it's worth checking out.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming']
    },
    {
        productName: "Golden-arm",
        productId: 2,
        message: "I'm hooked!  I can't wait for the finish to the trilogy, Golden-foot!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming']
    },
    {
        productName: "Golden-arm",
        productId: 2,
        message: "Tons of fun and lots of great new playable characters - they really deliver here",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming']
    },
    {
        productName: "Archie Kibble",
        productId: 3,
        message: "My cat is obsessed with this food - probably likes it too much, as he is putting on weight!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pet-food','cat-food']
    },
    {
        productName: "Archie Kibble",
        productId: 3,
        message: "Great food for a great price... not that I've tried it myself",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pet-food','cat-food']
    },
    {
        productName: "Archie Kibble",
        productId: 3,
        message: "Too expensive for my wallet!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pet-food','cat-food']
    },
    {
        productName: "Archie Kibble",
        productId: 3,
        message: "All but my pickiest cats seem to enjoy eating it",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pet-food','cat-food']
    },
    {
        productName: "Choc-o-lot Bars",
        productId: 4,
        message: "What a rich treat to enjoy a little too often for my diet!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['snack-food','food']
    },
    {
        productName: "Choc-o-lot Bars",
        productId: 4,
        message: "The only kind of chocolate I will eat now",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['snack-food','food']
    },
    {
        productName: "Choc-o-lot Bars",
        productId: 4,
        message: "Mine were all broken when I opened the package, but it still tasted good I guess",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['snack-food','food']
    },
    {
        productName: "ACME Decorative Tombstones",
        productId: 5,
        message: "These fell apart with one rain storm - really disappointing",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['halloween','decor']
    },
    {
        productName: "ACME Decorative Tombstones",
        productId: 5,
        message: "The stakes these came with were too small, but the tombstones looked fine in my yard when I used my own stakes",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['halloween','decor']
    },
    {
        productName: "ACME Decorative Tombstones",
        productId: 5,
        message: "Loved how these look - totally got my yard in the Halloween mood",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['halloween','decor']
    },
    {
        productName: "ACME Decorative Tombstones",
        productId: 5,
        message: "I like these, but I do wish they were bigger",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['halloween','decor']
    },
    {
        productName: "Bartender's Best Margarita Glasses",
        productId: 6,
        message: "These look so great and I love serving my guests with them",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['glassware']
    },
    {
        productName: "Bartender's Best Margarita Glasses",
        productId: 6,
        message: "I wish they were a little bigger (I like a heavy pour) but they work",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['glassware']
    },
    {
        productName: "Bartender's Best Margarita Glasses",
        productId: 6,
        message: "One of them arrived broken - they should really pack them better!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['glassware']
    },
    {
        productName: "Matexo Pink Water Bottle",
        productId: 7,
        message: "Saving the environment never looked so good!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['water-bottles']
    },
    {
        productName: "Matexo Pink Water Bottle",
        productId: 7,
        message: "Perfect size, and keeps my water cold all day",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['water-bottles']
    },
    {
        productName: "Matexo Pink Water Bottle",
        productId: 7,
        message: "Wish it was a little smaller to fit in my drink holder, but I should have checked the measurements",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['water-bottles']
    },
    {
        productName: "Matexo Pink Water Bottle",
        productId: 7,
        message: "Durable and cute at the same time",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['water-bottles']
    },
    {
        productName: "Kaysus Gaming PC",
        productId: 8,
        message: "The specs aren't worth what they are charging for it",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming','pc','gaming-pc']
    },
    {
        productName: "Kaysus Gaming PC",
        productId: 8,
        message: "It's a little slow, but the graphics look great when they load properly",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming','pc','gaming-pc']
    },
    {
        productName: "Kaysus Gaming PC",
        productId: 8,
        message: "Works great for my favorite simulation game, I'm happy with it",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gaming','pc','gaming-pc']
    },
    {
        productName: "Woolworth's Wool Sweater",
        productId: 9,
        message: "It keeps me incredibly warm in my cold climate!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['clothes']
    },
    {
        productName: "Woolworth's Wool Sweater",
        productId: 9,
        message: "Keeps pilling way more than I think it should, not happy",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['clothes']
    },
    {
        productName: "Woolworth's Wool Sweater",
        productId: 9,
        message: "Looks great, love all the color options",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['clothes']
    },
    {
        productName: "Woolworth's Wool Sweater",
        productId: 9,
        message: "The burgundy looks more pink than burgundy, be warned!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['clothes']
    },
    {
        productName: "Z440 Athletic Sneakers",
        productId: 10,
        message: "These kicks look so cool and I get lots of compliments on them!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['shoes','sneakers']
    },
    {
        productName: "Z440 Athletic Sneakers",
        productId: 10,
        message: "Get scuffed way too easily, I spend forever trying to keep them clean",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['shoes','sneakers']
    },
    {
        productName: "Z440 Athletic Sneakers",
        productId: 10,
        message: "Super comfortable on my daily runs",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['shoes','sneakers']
    },
]

export default productReviews;