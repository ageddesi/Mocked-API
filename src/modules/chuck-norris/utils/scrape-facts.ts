import { writeFileSync } from 'fs';
const path = require('path');

const Chuck = require('chucknorris-io'),
    client = new Chuck();

const GetRandomFactForCategory = async (category): Promise<any> => {
    var joke = await client.getRandomJoke(category);
    joke.categories.push(category); // fix bug #2 found in NodeJS Module
    return joke;
};

/**
 * Is the fact on a block list?
 * @param joke
 * @param blockListedFacts
 * @returns
 */
function IsBlockListed(joke: any, blockListedFacts) {
    return blockListedFacts.filter((id) => {
        return id === joke.id;
    });
}

/**
 * Is the fact already in a list
 * @param joke
 * @param chuckFacts
 * @returns
 */
function AlreadyOnList(joke: any, chuckFacts: any[]) {
    return chuckFacts.filter((element) => {
        return element.id === joke.id;
    });
}

(async () => {
    // Configuration
    // -------------
    const excludedCategories = ['explicit']; // Catgories from which Chuck Norris facts won't be retrieved.
    const blockListedFacts = [
        // A list of fact that were identified during testing that may be offensive, and won't be included in this data extract
        'hyQV9kHDSN61rRIsYwSr4Q',
        '66Eivn6tSV2IaNTzXEdgFQ',
        'HNTUHUUDSMObOHUHJul5sw',
        '-j1T5SaZT3yb1rwfKNDJvQ',
        'BwMFn3FCQQaCSw0uEKkWLw',
    ];
    const FactsPerCateory = 200; // Number of records for each category too download
    var RetryCount = 10; // Number of times to re-attempt an extract for a category.

    // Arguments
    const destination = process.argv[2];
    const OutputFile = path.resolve(destination);

    console.log('👊 Obtaining Chuck Norris facts');
    console.log(`📄 Output : ${OutputFile}\n`);

    var chuckFacts = []; // An array of facts to return to a call to the Chuck Norris End Point service.
    var summary = {}; // A summary object - numbers of facts for each category

    const categories = await client.getJokeCategories();
    var filtered = categories.filter(function (i) {
        return this.indexOf(i) < 0;
    }, excludedCategories);

    await Promise.all(
        filtered.map(async (category) => {
            console.log(`✨ Obtaining Chuck Norris Facts from category ${category} `);
            RetryCount = 10;
            var downloadCount = FactsPerCateory;
            summary[category] = 0;
            while (downloadCount > 0 && RetryCount > 0) {
                console.log(`Downloading fact ${downloadCount} for ${category}`);
                var fact = await GetRandomFactForCategory(category); // fix bug #2 found in NodeJS Module

                if (IsBlockListed(fact, blockListedFacts) == false && !AlreadyOnList(fact, chuckFacts) == false) {
                    // this fact is good, and we should publish it to the collection
                    chuckFacts.push(fact);
                    console.log(`💥 Adding ${fact.id} to ${category} - fact ${FactsPerCateory - downloadCount}`);
                    downloadCount--;
                    summary[category]++;
                    RetryCount = 10;
                } else {
                    // this fact is bad, or we already have it in the collection.  Let's try again
                    RetryCount--;
                }
                // wait for half a second - let's not overload the API endpoint.
                await delay(500);
            }
        })
    );
    console.log('✨ Download summary');
    console.log(JSON.stringify(summary));

    var JSONFileData = JSON.stringify(chuckFacts);
    writeFileSync(OutputFile, JSONFileData, {
        flag: 'w',
    });
})();

function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
