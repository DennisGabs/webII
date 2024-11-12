function dobraVetor(X){
    const dobro = X.map( e => e * 2);
    return dobro
}

function somaVetor(X, dobra) {
    const dobro = dobra(X)
    const soma = []
    for(let i = 0; i < X.length; i++){
        soma[i] = X[i] + dobro[i]
    }

    return soma
}


export { somaVetor, dobraVetor }