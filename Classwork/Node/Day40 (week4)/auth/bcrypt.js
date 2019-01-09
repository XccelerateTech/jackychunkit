module.exports = class {
    constructor(bcrypt) {
        this.bcrypt = bcrypt
    }

    hashPassword(plainTextPassword) {
        return new Promise((resolve, reject) => {
            this.bcrypt.genSalt((err, salt) => {
                if (err) {
                    reject(err);
                }
    
                this.bcrypt.hash(plainTextPassword, salt, (err, hash) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(hash);
                });
            });
        });
    };

    checkPassword(plainTextPassword, hashedPassword) {
        return new Promise((resolve, reject) => {
            this.bcrypt.compare(plainTextPassword, hashedPassword, (err, match) => {
                if(err) {
                    reject(err);
                }
    
                resolve(match);
            });
        });
    };
}