const elements = [
 6, null, 'word', 97, 42, undefined, 0.14, 'some number', false, 'project', 88, 0, undefined
];
const collection = {number: 0, string: 0, boolean: 0, object: 0, undefined: 0};

for (const element of elements) {
  const type = typeof element;

  if (!collection[type]) {
    collection[type] = 0;
  }
  collection[type]++;
}

console.dir(collection);