function newfun(a, b){
    let total = 0;

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


//  second soluation
// I was able to try later
function totalArr(a, b){
    let total = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total * b;
}

const array  = [0, 1, 2];
const numb = 5;

console.log(totalArr(array, numb));

