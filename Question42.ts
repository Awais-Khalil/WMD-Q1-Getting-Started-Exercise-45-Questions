function make_great(magicians: string[]): string[] {
    const great_magicians = [];
    for (const magician of magicians) {
      const great_magician = magician + " the Great";
      great_magicians.push(great_magician);
    }
    return great_magicians;
  }

const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];

const great_magicians = make_great(magicians);
console.log(great_magicians);

// Output:
// [ 'Harry Houdini the Great', 'David Blaine the Great', 'Penn Jillette the Great', 'Teller the Great' ]

export{};