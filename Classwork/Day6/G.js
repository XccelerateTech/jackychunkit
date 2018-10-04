const middle = (input) => {
  const max = Math.max(...input);
  const min = Math.min(...input);
  if (input[0] !== min && input[0] !== max) {
    return 0;
  } else if (input[1] !== min && input[1] !== max) { 
    return 1;
  } else {
    return 2;
  } 
}

middle([2,3,1]) // 0 -> 2 at index 0 lies between 3 and 1
middle([88, 7, 55 ]) // 2 -> 55 lies between 7 and 88