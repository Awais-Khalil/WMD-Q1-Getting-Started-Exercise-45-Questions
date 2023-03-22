function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function with the name of three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("London", "United Kingdom");
  describe_city("New York"); // uses default country value of "Unknown"
  