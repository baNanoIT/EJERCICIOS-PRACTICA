let promesaSuma = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resultado = a + b;
            console.log(resultado);
            resolve(resultado);
        }, 2000);
    });
}

async function promesaSuma2(){
    let resultado = await promesaSuma(3,5); 
    
    
}

promesaSuma2();