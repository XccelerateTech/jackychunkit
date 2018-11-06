const Beer = {
    verse: num => {
        switch (num) {
            case 0:
                return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
            case 1:
                return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
            case 2:
                return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`
            default:
                return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`
        }
    },
    sing: (from = 99, until = 0) => {
        let output = ''
        while (from >= until) {
            output += Beer.verse(from);
            (from !== until) ?
                output += `
` :
                output.substring(-2, -1);
            from--;
        } return output;
    }
}
export default Beer;