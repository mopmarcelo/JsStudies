function recursive(max) {
    if (max > 10)
        return;

    if (max === 0)
        return max;
    else 
        return max + recursive(max - 1);
}

console.log(recursive(6));