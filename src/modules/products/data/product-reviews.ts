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
        productName: "Super Gamer Juice",
        productId: 1,
        message: "Energy and focus for days! Could use a few more flavors though.",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "It is currently the only thing I have in my fridge!",
        dateTime: getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2022-02-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['sport-drinks','gaming']
    },
    {
        productName: "Super Gamer Juice",
        productId: 1,
        message: "Have been gaming for 3 days straight and will probably go for another 3. Who needs sleep when you have Super Gamer Juice!",
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
        productName: "Bartender's Best Margarita Glasses",
        productId: 6,
        message: "So fun to have at our Parrot Head Club parties!",
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
    {
        productName: "Z440 Athletic Sneakers",
        productId: 10,
        message: "Fit me perfect and have stood the test of time. Looking forward to next year's designs",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2022-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['shoes','sneakers']
    },
    {
        productName: "The super golden gloves 3000",
        productId: 11,
        message: "These are the gloves I always wanted to have. I received them last chrismas and I love them.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gloves','garden']
    },
    {
        productName: "The super golden gloves 3000",
        productId: 11,
        message: "Terrible gloves. They got broken after the second time I cut a tree. Need to improve in quality.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['gloves','garden']
    },
    {
        productName: "Tequila mi rancho",
        productId: 12,
        message: "I tried this first in New Zeland when I was 18 and I had a memorable night. The nex day however, was even more memorable.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['alcoholic','drinks', 'spirits']
    },
    {
        productName: "Tequila mi rancho",
        productId: 12,
        message: "What a nice taste, dry and thick. Remains in the throat with a banana-like flavor.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['alcoholic','drinks', 'spirits']
    },
    {
        productName: "Tequila mi rancho",
        productId: 12,
        message: "Changed my life, got me a wife and made me wild.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['alcoholic','drinks', 'spirits']
    },
    {
        productName: "Logimax keyboard 960",
        productId: 13,
        message: "Unfortunatelly, I got this with some broken buttons. Will as for a refund.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pc','tech', 'accesories']
    },
    {
        productName: "Logimax keyboard 960",
        productId: 13,
        message: "Works like a charm. My laptop's keyboard is usually very hot, but with this one I don't have that problem.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pc','tech', 'accesories']
    },
    {
        productName: "Logimax keyboard 960",
        productId: 13,
        message: "Keys are sooo soft, I'm planning to order another one.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['pc','tech', 'accesories']
    },
    {
        productName: "A little place called little-land",
        productId: 14,
        message: "The funniest thing I've ever read. It's so litlle that makes laugh... a little.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['books','ebooks', 'novel']
    },
    {
        productName: "A little place called little-land",
        productId: 14,
        message: "Finished in two hours. I was actually expecting it to be longer.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['books','ebooks', 'novel']
    },
    {
        productName: "A little place called little-land",
        productId: 14,
        message: "Another success for Jimmy, the author. Even thuoght he's short in size he has great ideas.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['books','ebooks', 'novel']
    },
    {
        productName: "A little place called little-land",
        productId: 14,
        message: "Couldn't put this book down, even though I really didn't love the main character, I needed to know how it finished, and I wasn't disappointed.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['books','ebooks', 'novel']
    },

    {
        productName: "Towel 100x50cm",
        productId: 15,
        message: "While not so soft they're very absorbent.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['bathroom','towels']
    },
    {
        productName: "Towel 100x50cm",
        productId: 15,
        message: "Been looking for these for years! Now that I finally found them, I enjoy my bath more than ever.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['bathroom','towels']
    },
    {
        productName: "Towel 100x50cm",
        productId: 15,
        message: "Luxirious towel, feels great on your skin and dries out quite fast.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['bathroom','towels']
    },
    {
        productName: "Motor case Y-U. The motorized suitcase for your travels.",
        productId: 16,
        message: "Why you? Indeed, why your product is easy to break?",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['travel','suitcase']
    },
    {
        productName: "Motor case Y-U. The motorized suitcase for your travels.",
        productId: 16,
        message: "Drives me from the airport's front door, directly to the plane. It's just crazy!",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['travel','suitcase']
    },
    {
        productName: "Motor case Y-U. The motorized suitcase for your travels.",
        productId: 16,
        message: "Got this for my 16yo kid and he loves it.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['travel','suitcase']
    },
    {
        productName: "Antique DVD player",
        productId: 17,
        message: "Finally, I can play all my DVDs again. Simply amazing.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['music','sound-devices']
    },
    {
        productName: "Antique DVD player",
        productId: 17,
        message: "If you're as old fashion as me, you're gonna love this.",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['music','sound-devices']
    },
    {
        productName: "Antique DVD player",
        productId: 17,
        message: "I've was waiting for this for so long but now that I have it. It doesn't seem to work :(",
        dateTime: getRandomDate(new Date('1960-02-12T01:57:45.271Z'), new Date('2023-12-31T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['music','sound-devices']
    },
    {
        productName: "Super Noise-Cancelling Headphones",
        productId: 18,
        message: "Wow. Just wow. I've had so many different types of headphones in my life, but this one takes the cake. Not only are they amazing at noise-cancellation, but the sound quality is the best I've ever heard. The bass on these is perfect!",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['headphones', 'electronics']
    },
    {
        productName: "Super Noise-Cancelling Headphones",
        productId: 18,
        message: "My wife works from home and she's always telling me about how distracting it is hearing all the noises outside. I heard great things about the Super Noise-Cancelling Headphones and decided to buy her a pair. She loves them! She said it has helped her stay in flow while working.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['headphones', 'electronics']
    },
    {
        productName: "Super Noise-Cancelling Headphones",
        productId: 18,
        message: "What are you waiting for? Get a pair of these headphones already! I'm telling you, you will have no regrets. Buy a pair for everyone you love, too.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['headphones', 'electronics']
    },
    {
        productName: "Super Noise-Cancelling Headphones",
        productId: 18,
        message: "I do not usually write reviews, but I felt obligated to share my experience. I am very particular with sound quality and I am impressed. I love using the Super Noise-Cancelling Headphones during my piano practice sessions. It allows me to really feel my music even with the hustle and bustle of New York City.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['headphones', 'electronics']
    },
    {
        productName: "Super Noise-Cancelling Headphones",
        productId: 18,
        message: "I wanted to love these. I really did. After seeing tons of good reviews, I thought these were the ones. Nope. They're not designed for large heads. Maybe if they come out with an XL version, I'll give them another shot. For now, they will be returned.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['headphones', 'electronics']
    },
    {
        productName: "Super Smooth Mouse",
        productId: 19,
        message: "This mouse is perfect for gamers. Smooth, with just the right amount of buttons to customize.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['computer mouse', 'gamer mouse', 'electronics']
    },
    {
        productName: "Super Smooth Mouse",
        productId: 19,
        message: "I've seen this mouse being advertised for gamers, but it sounded like it met all of my needs, so I decided to try it out. It's great! I do a lot of graphic design work and this has definitely improved my experience.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['computer mouse', 'gamer mouse', 'electronics']
    },
    {
        productName: "Super Smooth Mouse",
        productId: 19,
        message: "I've been using this mouse for 3 months and let me tell you! I will never go back to No Name Mouse again!",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['computer mouse', 'gamer mouse', 'electronics']
    },
    {
        productName: "Super Smooth Mouse",
        productId: 19,
        message: "My girlfriend gave me this as a gift. She is the best. I can't believe I didn't get this sooner!",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['computer mouse', 'gamer mouse', 'electronics']
    },
    {
        productName: "Super Smooth Mouse",
        productId: 19,
        message: "I received this product for free in exchange for my honest review. This mouse is smooth, ergonomically friendly, and has customizable buttons for all of your needs. I would highly recommend it to gamers and anyone who prioritizes comfort and functionality.",
        dateTime: getRandomDate(new Date('1970-02-12T01:57:45.271Z'), new Date('2022-10-12T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['computer mouse', 'gamer mouse', 'electronics']
    },
    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Have been looking all over for a pair of quads and these were such a deal I couldn’t say no!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Website was not easy to use but they shipped fast and are a great fit. ",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Are very narrow for my wide feet, should have bought one size up.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Fit like a dream and the neon pink color gets lots of looks on the street! Love them!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Seems fell apart within a few months and the laces are fraying. Great fit, but quality is disappointing.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Great little skate, takes me waaaay back! Happy to see these making a comeback",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "A bit on the heavy side, but holding up well.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },

    {
        productName: "Co-Pilot Roller Skates",
        productId: 20,
        message: "Not keen on the laces, takes so long to lace up, velcro option would be helpful",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['roller-skate', 'sports', 'recreational']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Instructions were clear, pizza was... ok",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Toppings were scarce, but cheese was tasty.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Worst frozen pizza I've ever had! Where are all the toppings? Would not buy again.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Quick and easy, was really hungry and ate the whole thing.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Tasty, but would be better if it came pre-sliced",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Badda-Boom Pizza",
        productId: 21,
        message: "Not bad for the price, could use more cheese though.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['frozen-entree', 'food']
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "Lovely minty flavor, though the lime green colour is a little odd",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "Nice addition to my brushing routine, doesn't burn too much.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "Burns right away, way too strong!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "Mouthwash is fine, but bottle is hard to open. Talk about child-proof",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "My dentist recommended it, tastes great and keeps me minty fresh all day!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Fresh Rinse Mouthwash",
        productId: 22,
        message: "Really great flavor! Wish it came in travel sizes.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['dental-hygiene',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "I wear them to bed and they cut out ALL the noise!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "I can finally block out my husband's snoring, what a life savor!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "Blocks out all the construction going on across the street so I can work in peace!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "Fall out while I sleep, could use more sizes.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "Meditating with 4 kids playing in the next room is not easy, these things definitely help!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Silencers",
        productId: 23,
        message: "Work great for blocking out noise when I sleep, only problem is I can't hear my alarm now.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['Earpluggs', 'noise-cancelling',]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "My roses were barely staying alive before using this, and how I can't believe how many there are!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "Used it in my vegetable garden and my pumpkin won 'Biggest Squash' and the fair this year!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "Great product, but use sparingly, the ivy took over the garage this summer! ",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "Really powerful, my butterfly garden was bigger this year than I've ever seen it!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "Use some on my indoor succulents and they doubled in size!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Big Sprouts Fertilizer",
        productId: 24,
        message: "Worked so great in the garden I tried to use it on my husband's bald spot. No luck yet.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['plant-food', 'gardening', ]
    },
    {
        productName: "Robo-Ruff",
        productId: 25,
        message: "A bit noisy, but they kids love her, and no shedding!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['droid', 'toy', 'pet' ]
    },
    {
        productName: "Robo-Ruff",
        productId: 25,
        message: "Bought one for my niece and now she wants a real one!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['droid', 'toy', 'pet' ]
    },
    {
        productName: "Robo-Ruff",
        productId: 25,
        message: "Wont stop barking at me, but loves my brother. Might be a glitch.",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['droid', 'toy', 'pet' ]
    },
    {
        productName: "Robo-Ruff",
        productId: 25,
        message: "Boy, what technology can do these days, smartest little bot I've ever seen! My 87 year old mum loves her!",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['droid', 'toy', 'pet' ]
    },
    {
        productName: "Robo-Ruff",
        productId: 25,
        message: "Easiest pet I've ever had, even our 3 year old can walk her :)",
        dateTime: getRandomDate(new Date('1985-03-07T01:57:45.271Z'), new Date('2044-10-17T01:57:45.271Z')),
        rating: randomRating(),
        userName: getFullNames(1),
        categories: ['droid', 'toy', 'pet' ]
    },
]

export default productReviews;
