const fs = require('fs');

class myPromises {
    upload(name, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(__dirname + '/storage/' + name, data, err => {
                (!err) ? resolve() : reject(err);
            });
        });
    }

    download(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + path, (err, data) => {
                (!err) ? resolve(data) : reject(err);
            });
        });
    }

    findDir(path) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (err, files) => {
                (!err) ? resolve(files) : reject(err);
            });
        });
    }
}

module.exports = myPromises;