"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("The Beatles", "Abbey Road"));
console.log(make_album("Pink Floyd", "The Wall"));
console.log(make_album("Led Zeppelin", "Led Zeppelin IV"));
// Output:
// { artist: 'The Beatles', title: 'Abbey Road' }
// { artist: 'Pink Floyd', title: 'The Wall' }
// { artist: 'Led Zeppelin', title: 'Led Zeppelin IV' }
console.log(make_album("Metallica", "Master of Puppets", 8));
// Output:
// { artist: 'Metallica', title: 'Master of Puppets', tracks: 8 }
