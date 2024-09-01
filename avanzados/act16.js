function duplicarYfiltrar(arreglo){
    return arreglo.map(x => x*2).filter(x => x > 10);
}

console.log(duplicarYfiltrar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))