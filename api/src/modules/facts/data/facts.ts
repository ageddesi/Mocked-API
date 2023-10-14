const facts = [
    {
        fact: 'Dalmatians are born without spots! They are born with plain white coats with their first spots appearing after they are 1week old.',
        category: 'dog'
    },
    {
        fact: 'Dogs sweat through their foot pads to help keep them cool. They also keep cool by panting.',
        category: 'dog'
    },
    {
        fact: 'Greyhounds are the world\'s fastest dogs with the ability to reach up to 45 mph.',
        category: 'dog'
    },
    {
        fact: 'Every dog has a unique nose print with no two alike.',
        category: 'dog'
    },
    {
        fact: 'The Basenji, an African wolf dog, does not bark in a normal way but may yodel or scream when excited!',
        category: 'dog'
    },
    {
        fact: 'Snoopy, from Charles M. Schultz\'s "Peanuts" comic strip, is a beagle.',
        category: 'dog'
    },
    {
        fact: 'A dog\'s sense of smell is 1000 times greater than a human!',
        category: 'dog'
    },
    {
        fact: 'Nine percent of dog owners will have a birthday party for their pet.',
        category: 'dog'
    },
    {
        fact: 'Dogs have 28 baby teeth and 42 permanent teeth.',
        category: 'dog'
    },
    {
        fact: 'Cats have 32 muscles in each ear.',
        category: 'cat'
    },
    {
        fact: 'Cats have 4 rows of whiskers.',
        category: 'cat'
    },
    {
        fact: 'Cats have no collarbone, which is one reason they are so flexible.',
        category: 'cat'
    },
    {
        fact: 'Cats spend approximately 30% of their waking hours grooming themselves.',
        category: 'cat'
    },
    {
        fact: '"American Shorthair" is the designation reserved for pedigreed cats, while similar-looking cats of mixed or unknown origin are called "domestic shorthairs."',
        category: 'cat'
    },
    {
        fact: 'Feline\'s jaws cannot move sideways.',
        category: 'cat'
    },
    {
        fact: 'Cats have over one hundred vocal sounds, while dogs have about ten!',
        category: 'cat'
    },
    {
        fact: 'Cat whiskers are so sensitive they can detect the slightest change in air current.',
        category: 'cat'
    },
    {
        fact: 'Cats have 26 baby teeth and 30 permanent teeth.',
        category: 'cat'
    },
    {
        fact: 'Fleas can jump 350 times its body length.',
        category: 'animal'
    },
    {
        fact: 'Hummingbirds are the only birds that can fly backwards.',
        category: 'animal'
    },
    {
        fact: 'Crocodiles cannot stick their tongue out.',
        category: 'animal'
    },
    {
        fact: 'Starfish do not have a brain.',
        category: 'animal'
    },
    {
        fact: 'Slugs have 4 noses.',
        category: 'animal'
    },
    {
        fact: 'Only female mosquitoes bite.',
        category: 'animal'
    },
    {
        fact: 'Polar bear skin is black!',
        category: 'animal'
    },
    {
        fact: 'The only mammal capable of flight is the bat.',
        category: 'animal'
    },
    {
        fact: 'A newborn kangaroo is the size of a lima bean.',
        category: 'animal'
    },
    {
        fact: 'Coconuts, peaches, and pineapples are all considered to be berries.',
        category: 'fruit'
    },
    {
        fact: 'At one point in time, blackberry juice was used to dye clothes.',
        category: 'fruit'
    },
    {
        fact: 'Coffee beans aren’t really beans at all. Instead, they’re actually fruit pits.',
        category: 'fruit'
    },
    {
        fact: 'Pomology: the science of growing fruits.',
        category: 'fruit'
    },
    {
        fact: 'Humans and bananas have 50% of the same DNA.',
        category: 'fruit'
    },
    {
        fact: 'The stickers placed on fruits are made out of edible paper, meaning that they are, technically, able to be consumed.',
        category: 'fruit'
    },
    {
        fact: 'The Durian fruit is the world’s worst smelling fruit.',
        category: 'fruit'
    },
    {
        fact: 'Kiwis, at one time, were known as Chinese Gooseberries.',
        category: 'fruit'
    },
    {
        fact: 'Plums, pears, peaches, and apples are all apart of the Rose Family.',
        category: 'fruit'
    },
    {
        fact: 'Pomegranates can have up to 1,400 seeds.',
        category: 'fruit'
    },
    {
        fact: 'A mango tree can grow to be 100 feet tall.',
        category: 'fruit'
    },
    {
        fact: 'Apples are 25% air which is why, when placed in water, they float.',
        category: 'fruit'
    },
    {
        fact: 'Many Japanese farmers grow watermelon in the shape of a cube in order to make more space in refrigerators.',
        category: 'fruit'
    },
    {
        fact: 'Starfruit can also be called Carambola.',
        category: 'fruit'
    },
    {
        fact: 'Explorers once used watermelons as canteens.',
        category: 'fruit'
    },
    {
        fact: 'Orange peels have four times more fiber than oranges themselves.',
        category: 'fruit'
    },
    {
        fact: 'Strawberries typically have around 200 seeds. They’re also the only fruit with seeds on the outside.',
        category: 'fruit'
    },
    {
        fact: 'There are more than 1,000 known species of blackberries.',
        category: 'fruit'
    },
    {
        fact: 'Dragon Fruit is full of vitamin C and is even said to help reduce acne.',
        category: 'fruit'
    },
    {
        fact: 'Lemons are a cross between sour oranges and citrons.',
        category: 'fruit'
    },
    {
        fact: 'Most lime species are natives of Asia.',
        category: 'fruit'
    },
    {
        fact: 'Hawaii is the only state in the U.S. that grows papayas to market and sell.',
        category: 'fruit'
    },
    {
        fact: 'China sells and produces more tangerines that any other country.',
        category: 'fruit'
    },
    {
        fact: 'In Latin, the word pomegranate means “apple with many seeds.”',
        category: 'fruit'
    },
    {
        fact: 'Some fruits that most people haven’t ever heard of–but are worth learning more about–include the following: cotton candy grapes, lemon cucumbers, kiwi berries, cherimoya, jackfruit, pomelo, water apples, etc.',
        category: 'fruit'
    },
    {
        fact: 'Grapes, when heated in a microwave, will actually explode.',
        category: 'fruit'
    },
    {
        fact: 'The fruit salad tree is a tree that can grow up to 7 different fruits.',
        category: 'fruit'
    },
    {
        fact: 'Tomatoes have more genes than we do.',
        category: 'fruit'
    },
    {
        fact: 'Miracle fruit is a fruit that, when eaten, causes sour foods to taste sweet for at least an hour or two after consumption.',
        category: 'fruit'
    },
    {
        fact: 'As pineapples were so expensive in colonial times, people would simply rent these flavorful fruits and show them off to others as a sign of wealth.',
        category: 'fruit'
    },
    {
        fact: 'Space is completely silent because there is no atmosphere.',
        category: 'space'
    },
    {
        fact: 'Our solar system is around 4.571 billion years old.',
        category: 'space'
    },
    {
        fact: 'The highest mountain found in our solar system is on Mars.',
        category: 'space'
    },
    {
        fact: 'It would take a modern spacecraft 450 million years to travel to the center of the Milky Way.',
        category: 'space'
    },
    {
        fact: 'Mars is often described as the "Red Planet" because the iron oxide prevalent on its surface gives it a reddish appearance.',
        category: 'space'
    },
    {
        fact: 'Uranus spins sideways.',
        category: 'space'
    },
    {
        fact: 'There is water in space.',
        category: 'space'
    },
    {
        fact: 'The moon is the only other world humans have ever set foot on.',
        category: 'space'
    },
    {
        fact: 'A space station can provide nearly everything humans need. However, current space stations cannot simulate gravity which our bodies need.',
        category: 'space'
    },
    {
        fact: "Mars' sunsets are blue.",
        category: 'space'
    },
    {
        fact: 'The hottest planet in our solar system is Venus.',
        category: 'space'
    },
]

export default facts;
