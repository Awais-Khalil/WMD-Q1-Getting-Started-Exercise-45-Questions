let current_users: string[] = ['John', 'Mary', 'Peter', 'Sarah', 'David'];
let new_users: string[] = ['Peter', 'Mark', 'Alice', 'David', 'Julia'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }
  if (usernameExists) {
    console.log(`Sorry, ${new_users[i]} is already taken. Please choose a different username.`);
  } else {
    console.log(`${new_users[i]} is available.`);
  }
}
