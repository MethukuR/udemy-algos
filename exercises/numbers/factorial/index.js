function factorial(n) {
    return fact(n,1)
}

function fact(input, result){
    if(input <= 1){
        return result;
    }

    return fact(input-1, result*input);
}

module.exports = factorial;
