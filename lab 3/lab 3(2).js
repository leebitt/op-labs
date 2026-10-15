const characters = 'abcdefg12345klmopqrst7689uvw';
function generateKey(length, characters) {
  let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
const key = generateKey(9, characters);
console.log(key);