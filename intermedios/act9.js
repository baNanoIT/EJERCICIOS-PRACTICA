persona = {
    nombre:'Jesus',
    edad: '22',
    ciudad: 'Smily City',

    funcionImprimirInfo: function(){
        console.log( `Soy ${this.nombre}`)
        console.log(`Tengo ${this.edad}`)
        console.log(`Y vivo en ${this.ciudad}`)
    }
}

persona.funcionImprimirInfo()

