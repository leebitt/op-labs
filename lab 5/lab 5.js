//#1

const seq = (fn) => {
  const functions = [fn];

  const next = (arg) => {
    if (typeof arg === 'number') {
      let result = arg;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    }

    functions.push(arg);
    return next;
  };

  return next;
};

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7))

//#2

const array = () => {
  const items = [];
  const get = (index) => items[index];
  get.push = (value) => items.push(value);
  get.pop = () => items.pop();

  return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());