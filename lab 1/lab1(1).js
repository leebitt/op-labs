function inc(a) {
  return a + 1;
}
const a = 10;
const b = inc(a);
console.dir({ a, b });

function incobj(Num) {
  Num.n++;
}

const obj = {n: 1};
incobj(obj);
console.dir(obj);
