//#1

const iterate = (object, callback) => {
  for (const key of Object.keys(object)) {
    callback(key, object[key], object);
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

//#2

const store = (value) => () => value;

const read = store(5);
const value = read();
console.log(value);

//#3

const contract = (fn, ...types) => (...args) => {
  const expectedArgsTypes = types.slice(0, -1);
  const expectedReturnType = types[types.length - 1];

  const checkType = (val, Type) => {
    const typeName = Type.name.toLowerCase();
    if (typeof val === typeName) return true;
    if (val instanceof Type) return true;
    return false;
  };

  if (args.length !== expectedArgsTypes.length) {
    throw new TypeError(`Expected ${expectedArgsTypes.length} arguments, got ${args.length}`);
  }

  for (let i = 0; i < args.length; i++) {
    if (!checkType(args[i], expectedArgsTypes[i])) {
      throw new TypeError(`Argument at index ${i} must be of type ${expectedArgsTypes[i].name}`);
    }
  }

  const result = fn(...args);

  if (!checkType(result, expectedReturnType)) {
    throw new TypeError(`Return value must be of type ${expectedReturnType.name}`);
  }

  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);