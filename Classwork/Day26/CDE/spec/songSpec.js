const Song = require('../song.js');

describe('test for the song',() => {
    it('should return the string responding the names, album and author',() => {
        const song = new Song('songName','albumName','authorName')
        expect(song.getDescription).toEqual('The name of this song is songName and it is from the album albumName. It is written by authorName')
    })
    it('should match the song in the same album',() => {
        const songA = new Song('songA', 'albumA', 'authorA');
        const songB = new Song('songB', 'albumA', 'authorB');
        expect(songA.isInSameAlbum(songB)).toBeTruthy();
    })
    it('should be false if songs are not in the same album',() => {
        const oldSong = new Song('oldSong', 'oldAlbum', 'oldAuthor');
        const newSong = new Song('newSong', 'newAlbum', 'newAuthor');
        expect(oldSong.isInSameAlbum(newSong)).not.toBeTruthy();
    })
})