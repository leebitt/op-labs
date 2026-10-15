function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x*x;
}

function cube(x) {
    return x*x*x;
}

function calculate() {
    const result = [];
    for (let i = 0; i <= 9; i++) {
        const sq = square(i);
        const cu = cube(i);
        const avg = average(sq, cu);
        result.push(avg);
    }
    return result;
}

console.log(calculate());