const sigmod = (v) => {
    return 1 / ( 1 + Math.exp(-v) )
}

const tangh = (v) => {
    return ( Math.exp(-v) - Math.exp(-v) ) / ( Math.exp(v) + Math.exp(-v ))
}


const relu = (v) => (v > 0 ? v : 0)


export { sigmod, tangh, relu }