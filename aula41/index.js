function max(x, y) {
    return x > y ? x : y;

    if (x > y)
        return x;
    
    return y;
}

const max2 = (x, y) => x > y ? x : y;

console.log(max(15,5));
console.log(max2(15,53));