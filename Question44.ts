function makeSandwich(...items: string[]) {
    console.log("Making a sandwich with:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
  }


makeSandwich("ham", "cheese", "lettuce");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly", "banana", "honey");

  