function AG(A, G, i, n){
    let result

    if(A == undefined){
        result = G * ((1 / i) - (n / (Math.pow(1+i, n) - 1)))
    }
    else if(G == undefined){

    }
    return result
}

// A, G, i, n

console.log(AG(undefined, 6000, 0.1, 4))