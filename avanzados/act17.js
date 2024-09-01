const contarCaracteres = (vector) => {
    contador = 0
    vector.map(elemnt => contador += elemnt.length)    
    return contador
}

console.log(contarCaracteres(["abs", "32 ", "abc"]))