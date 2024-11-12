function calculo(X, ativacao){
    let W = treinamento( X.length )
    let V = 0
    for(let i = 0; i < X.length; i++){
        v += (X[i] * W[i])
    }
    var f = ativacao(v)
    return f
}

function treinamento(n){
    let w = []

    for(let i = 0; i < n; i++){
        w.push( Math.random() )
    }
    return w
}

export default calculo