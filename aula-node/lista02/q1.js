import { somaVetor, dobraVetor} from "./modules/sum.js"

const vetor = [ 3, 5, 7, 10, 12]

console.log(somaVetor(vetor, dobraVetor))

console.log(somaVetor(vetor, (e) => {
    const arr = []
    for(let i = 0; i < e.length; i++){
        arr[i] = e[i] * 2
    }

    return arr
}))