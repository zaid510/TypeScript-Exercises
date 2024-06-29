//Album: Write a function called make_album() that builds a Object describing a music album.
interface album {
    name: string, 
    album_title: string,
    tracks?: number
}
function make_album(name: string, album_title: string, tracks?:number):album {
    let myAlbum: album = {
        name: name,
        album_title: album_title
    }
    if (tracks !== undefined) {
        myAlbum.tracks = tracks;
    }
    return myAlbum;
}
console.log(make_album('Atif Aslam', 'Alif', 3));
console.log(make_album('Ali Zafar', 'Tere lye'));
export{};