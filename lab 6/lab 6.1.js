const pipe = (...functions) => {
  for (const functinn of functions) {
    if (typeof functinn !== 'function') {
      throw new Error(`Це має бути функція!!`);
    }
  }

  return (x) => functions.reduce((result, fn) => fn(result), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
  const f3 = pipe(inc, 7, cube);
} catch (error) {
  console.error(error.message);
}