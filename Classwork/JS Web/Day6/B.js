function reverse(input) {
    const output = [];
    for (var i = 10; i < input * 10; i *= 10) {
      output.push(parseInt(input % i * 10 / i))
    } return output;
}
reverse(12345);