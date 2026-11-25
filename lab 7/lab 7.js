// #1
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

const arrayColors = ['red', 'blue', 'white', 'black', 'green', 'brown'];
removeElement(arrayColors, 'black');
console.log(arrayColors);

// #2
function removeElements(array, ...items) {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index >= 0) {
      array.splice(index, 1);
    }
  }
}

const array = [3, 22, 156, 0, 12, 6, 9, 54, 1001];
removeElements(array, 54, 0, 6);
console.log(array);

// #3
function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}


const uniqueResult = unique(['monkey', 'lion', 'lion', 'cat']);
console.log(uniqueResult);

// #4
function difference(array1, array2) {
  return array1.filter((item) => !array2.includes(item));
}

const arrayCity1 = ['Tokyo', 'Cairo'];
const arrayCity2 = ['Tokyo', 'Madrid', 'Wellington'];
const CityResult = difference(arrayCity1, arrayCity2);
console.log(CityResult);