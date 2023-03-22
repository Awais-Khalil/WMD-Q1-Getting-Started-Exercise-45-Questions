function make_shirt(message: string = "I love TypeScript", size: string = "L"): void {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
  }
  
  // Call the function to make a large shirt with the default message
  make_shirt();
  
  // Call the function to make a medium shirt with the default message
  make_shirt("I love TypeScript", "M");
  
  // Call the function to make a shirt of any size with a different message
  make_shirt("TypeScript is awesome!", "S");

  export{};