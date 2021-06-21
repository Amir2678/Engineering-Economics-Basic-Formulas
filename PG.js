function PG(P, G, i, n){
    let result

    if(P == undefined){
        // result = (G / i) * (((Math.pow(1+i, n) - 1) / (Math.pow(1+i, n))) - (n / (Math.pow(1+i, n))))
        // result = (G / i) * ((Math.pow(1+i, n) - 1 - n) / (Math.pow(1+i, n)))
        // result = G * ((Math.pow(1+i, n) - (i*n) - (1)) / (i * (Math.pow(1+i, n)) - i))
        // The actual FUCK??? -___-
    }
    else if(G == undefined){

    }
    return result
}

// P, G, i, n

console.log(PG(undefined, 30, 0.05, 5))