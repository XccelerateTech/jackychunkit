const fs = require('fs');
const path = require('path');

const copy = (from, to) => {
    const readable = fs.createReadStream(from, { encoding: 'utf8', highWaterMark: 32 * 1024 });
    const dirname = path.dirname(to)
    if (fs.existsSync(dirname)) {
        readable.pipe(fs.createWriteStream(to));
    } else {
        fs.mkdirSync(dirname);
        readable.pipe(fs.createWriteStream(to));
    }
}
copy('../lorem\ iqsum.txt', './lorem\ iqsum.txt')
copy('../lorem\ iqsum.txt', './new folder/lorem\ iqsum.txt')