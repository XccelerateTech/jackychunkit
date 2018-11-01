module.exports = findDir = path => {
    return new Promise((resolve, reject) => {
        require('fs').readdir(path, { withFileTypes: true }, (err, files) => {
            (!err) ? resolve(files) : reject(err);
        });
    });
}