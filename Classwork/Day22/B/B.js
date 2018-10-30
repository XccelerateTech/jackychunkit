const fs = require('fs');

let readable = fs.createReadStream('../lorem\ iqsum.txt', { encoding: 'utf8', highWaterMark: 32*1024 });
let writeable = fs.createWriteStream('./lorem\ iqsum.txt');

readable.pipe(writeable);