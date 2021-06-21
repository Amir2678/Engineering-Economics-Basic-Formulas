function PA(P, A, i, n){
    let result = 0

    if(P == undefined){
        result = A * ((((Math.pow((1+i), n)) - 1)) / (i * (Math.pow((1+i), n))))
    }
    else if(A == undefined){
        result = P * ((i * (Math.pow((1+i), n))) / ((Math.pow((1+i), n)) - 1))
    }
    return result
}

// P, A, i, n

console.log(PA(undefined,1800000,0.18,3))