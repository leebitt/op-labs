const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
};

const persons = {
  shevchenko: { born: 1814, died: 1861 },
  shakespeare: { born: 1564, died: 1616 },
  hemingway: { born: 1899, died: 1961 },
  orwell: { born: 1903, died: 1950 },
};

console.log(ages(persons));