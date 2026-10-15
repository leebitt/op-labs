function fn() {
  const nameconst = { name: 'Darry' };
  let namelet = { name: 'Sinco' };

  nameconst.name = 'Ruby';
  namelet.name = 'Sea';

  namelet = { name: 'Prague' }
  // nameconst = { name: 'London' } якщо спробувати змінити константу, видає помилку
}

function createUser(name, city) {
  const user = { name, city };
  console.log(user);
}

createUser('Darry Sinco', 'Prague')
createUser('Ruby Sea', 'London')