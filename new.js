function newfun(a, b){
    let total = [''];

    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        total = element * b;
        console.log(total);
    }
    return total;
}

const ar  = [0, 1, 2];
const number = 5;

console.log(newfun(ar, number));

