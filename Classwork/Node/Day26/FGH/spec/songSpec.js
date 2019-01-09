const helper_func = require('../spec/helpers/SpecHelper');
const Song = require('../song.js');

describe('matches 2 different songs', () => {
    beforeEach(function () {
        helper_func();
        songA = new Song('songA','albumA','authorA')
        songB = new Song('songA','albumA','authorA')
    });
    
    it('same author and same album',() => {
        expect(songA).toBeInTheSameAlbumAs(songB);
    })

    it('not the same object',() => {
        expect(songA).not.toBe(songB);
        // basically ===
    })
    it('same valueholders',() => {
        expect(songA).toEqual(songB);
        // basically ==
    })
})