function PA1geo(P, A1, i, j, n){
    let result

    if(P == undefined){
        if(i == j){
            result = (n * A1) / (1+i)
        }
        else{
            result = A1 * ((1 - ((Math.pow(1+j, n)) / (Math.pow(1+i, n)))) / (i-j))
        }
    }
    return result
}

// P, A1, i, j, n

console.log(PA1geo(undefined, 6250, 0.12, 0.2, 4))