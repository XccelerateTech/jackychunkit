const findDir = require('./promise');

async function getName(path) {
    const files = await findDir(path);
    files.forEach(file => {
        if (file.isDirectory()) {
            console.log(`${path}${file.name}/ is a directory`)
            getName(`${path}${file.name}/`)
        } else {
            console.log(`${path}${file.name}/ is a file`)
        }
    })
}
getName('./files/');