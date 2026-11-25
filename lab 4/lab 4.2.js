const max = (matrix) => {
  let val = -Infinity;
  for (const row of matrix) {
    for (const num of row) {
      if (num > val) {
        val = num;
      }
    }
  }
  return val;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);