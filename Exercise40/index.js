"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(name, album_title, tracks) {
    var myAlbum = {
        name: name,
        album_title: album_title
    };
    if (tracks !== undefined) {
        myAlbum.tracks = tracks;
    }
    return myAlbum;
}
console.log(make_album('Atif Aslam', 'Alif', 3));
console.log(make_album('Ali Zafar', 'Tere lye'));
