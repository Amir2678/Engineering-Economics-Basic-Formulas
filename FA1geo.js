function FA1geo(F, A1, i, j, n){
    let result

    if(F == undefined){
        if(i == j){
            result = n * A1 * (Math.pow(1+j, n-1))
        }
        else{
            result = A1 * (((Math.pow(1+i, n)) - (Math.pow(1+j, n))) / (i-j))
        }
    }
    return result
}

// F, A1, i, j, n

console.log(FA1geo(undefined, 50000, 0.08, 0.1, 10))