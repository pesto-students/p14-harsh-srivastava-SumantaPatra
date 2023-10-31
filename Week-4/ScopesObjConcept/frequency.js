function calcWordFrequencies(){
    const givenString = prompt("enter list of words")
    const wordFrequencyMap = new Map();
    givenString.split(" ").forEach((word)=>{
      const lowercaseWord = word.toLowerCase();
      const count = wordFrequencyMap.has(lowercaseWord) ? wordFrequencyMap.get(lowercaseWord) + 1 : 1;
      wordFrequencyMap.set(lowercaseWord,count)
    })

    wordFrequencyMap.forEach((value,key)=>{
        console.log(`${key} ${value}`)
    })
}

calcWordFrequencies()

