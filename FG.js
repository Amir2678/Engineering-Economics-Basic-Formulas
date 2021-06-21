function FG(F, G, i, n){
    let result

    if(F == undefined){
        result = (G / i) * (((Math.pow(1+i, n) - 1) / i) - n)
    }
    else if(G == undefined){

    }
    return result
}

// F, G, i, n

console.log(FG(undefined, 100, 0.05, 10))