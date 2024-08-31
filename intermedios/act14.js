const promesaSuma = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resultado = a + b;
            console.log(resultado);
            resolve(resultado);
        }, 2000);
    });
}

                promesaSuma(12,3)