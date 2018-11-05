const helper_func = () => {
  jasmine.addMatchers({
    toBeInTheSameAlbumAs: function () {
    return {
      compare: function (actual, expected) {
        const song = actual;

        return {
          pass: song.album === expected.album
        }
      }
    };
  }
});
}

module.exports = helper_func;