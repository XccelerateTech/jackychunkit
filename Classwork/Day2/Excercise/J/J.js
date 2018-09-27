const NoLessThanMillion = (num) => {
    if (!(num > 0)) {
        return 'ERROR';
    } else {
        while (num < 1000000) {
            num *= 10;
        }
        return num;
    }
}
