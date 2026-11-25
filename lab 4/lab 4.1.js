//1
const sumFor = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

//2
const sumForof = (...args) => {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
};

//3
const sumWhile = (...args) => {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

//4
const sumDowhile = (...args) => {
  if (args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};

//5
const sumReduce = (...args) => args.reduce((acc, num) => acc + num, 0);

console.log(sumFor(1, 2, 3));
console.log(sumForof(0));
console.log(sumWhile());
console.log(sumDowhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));