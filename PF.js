function PF(P, F, i, n){
    let result

    if(P == undefined){
        result = F * (1 / (Math.pow(1+i, n)))
    }
    else if(F == undefined){
        result = P * Math.pow(1+i, n)
    }

    return result
}

// P, F, i, n

console.log(PF(26000, undefined, 0.08, 3))