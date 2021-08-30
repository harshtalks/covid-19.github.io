export const formatNumbers = function(number){
    return new Intl.NumberFormat('en-US').format(number)
}

export const findIncremet =  function(numerator, denom){
    const final = numerator / (denom - numerator)*100;
    return `${final.toFixed(2)}%`
}