let findDir = path => {
    require('fs').readdir(path, { withFileTypes: true }, (err, files) => {
        files.forEach(file => {
            if (file.isDirectory()) {
                console.log(`${path}${file.name}/ is a directory`);
                findDir(`${path}${file.name}/`);
            } else {
                console.log(`${path}${file.name}/ is a file`);
            }
        });
    });
}
findDir('./files/');