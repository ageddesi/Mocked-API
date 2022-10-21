
import {writeFileSync} from 'fs';
const path = require("path"); 
    
const Chuck  = require('chucknorris-io'),
client = new Chuck();


(async () => {

    // Configuration
    // -------------
    const excludedCategories = ["explicit"]     // Catgories from which Chuck Norris facts won't be retrieved.  
    const blockListedFacts = [                  // A list of fact that were identified during testing that may be offensive, and won't be included in this data extract
        "hyQV9kHDSN61rRIsYwSr4Q",
        "66Eivn6tSV2IaNTzXEdgFQ",
        "HNTUHUUDSMObOHUHJul5sw",
        "-j1T5SaZT3yb1rwfKNDJvQ",
        "BwMFn3FCQQaCSw0uEKkWLw"
    ]
    var recordsToDownload = 200;                // Number of records for each category too download
    var RetryCount = 10;                        // Number of times to re-attempt an extract for a category.

    // Arguments
    const destination = process.argv[2];
    const OutputFile = path.resolve(destination);   
    
    console.log("👊 Obtaining Chuck Norris facts")
    console.log(`📄 Output : ${OutputFile}\n`)
    
    var chuckFacts = []                         // An array of facts to return to a call to the Chuck Norris End Point service.
    
    
    const categories = await client.getJokeCategories();
    var filtered = categories.filter(function(i){return this.indexOf(i)<0},excludedCategories);
    
    await Promise.all(filtered.map(async (category) => {
        console.log(`✨ Obtaining Chuck Norris Facts from category ${category} `);
        
        for (let index = 0; index < recordsToDownload; index++) {
            if (RetryCount == 0 )
            {break;}
            var joke= await client.getRandomJoke(category);
            joke.categories.push(category);      // fix bug #2 found in NodeJS Module
            
            // Is the joke an existing joke, or a joke that has been block listed.
            var existingfact = chuckFacts.filter((element) =>{return element.id === joke.id})
            var isBlackListedFact = blockListedFacts.filter((id) =>{return id === joke.id})
            
            if (existingfact.length == 0 && isBlackListedFact.length == 0){
                chuckFacts.push(joke)
                RetryCount = 10;
            } else{
                RetryCount =RetryCount-1;
            }
          }
    }));

    var JSONFileData =  JSON.stringify(chuckFacts)
    writeFileSync(OutputFile, JSONFileData, {
        flag: 'w'
      })

})();
