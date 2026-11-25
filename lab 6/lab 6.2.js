const compose = (...functions) => {
  for (const functinn of functions) {
    if (typeof functinn !== 'function') {
      throw new Error(`Це має бути функція!!`);
    }
  }

  const ErrorCalls = [];
  const fn = (x) => {
    let result = x;
    try {
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    } catch (error) {
      for (const callback of ErrorCalls) {
        callback(error);
      }
      return undefined;
    }
  };

  fn.on = (event, callback) => {
    if (event === 'error' && typeof callback === 'function') {
      ErrorCalls.push(callback);
    }
    return fn;

  }
  return fn;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const DivZero = x => {
  if (x === 0) throw new Error('Ділити на нуль не можна!');
  return 10 / x;
};

const f = compose(inc, twice, DivZero);

f.on('error', (e) => {
  console.log('Помилка:', e.message);
});

console.log(f(5));
console.log(f(0)); 