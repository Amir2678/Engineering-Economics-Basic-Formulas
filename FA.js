function FA(F, A, i, n){
    let result

    if(F == undefined){
        result = A * (((Math.pow((1+i), n)) - 1) / i)
    }
    else if(A == undefined){
        result = F * (i / (((Math.pow((1+i), n)) - 1)))
    }
    return result
}

// F, A, i, n

console.log(FA(undefined,1800000,0.18,3))