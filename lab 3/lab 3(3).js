const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

function introspect(iface) {
  let result = [];
  let keys = Object.keys(iface);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = iface[key];

    if (typeof value === 'function') {
      let count = value.length;
      result.push([key, count]);
    }
  }

  return result;
}

console.log(introspect(iface));