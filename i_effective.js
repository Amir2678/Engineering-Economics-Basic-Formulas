function i_effective(ie, r, t){
    let result

    if(ie == undefined){
        result = (Math.pow(1 + (r/t), t)) - 1
    }
    return (result * 100).toFixed(3) + " %"
}

// ie, r, t

console.log(i_effective(undefined, 0.04, 182.5))