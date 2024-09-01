curso = {
    nombre:'Algebra',
    alumnos: [{nombre: 'maria',calificacion: 100},{nombre: 'juan',calificacion: 90}
              , {nombre: 'pedro',calificacion: 80}
    ]
}

function promedio_calificaciones(curso){
    let suma = 0;
    for(let i=0; i<curso.alumnos.length; i++){
        suma += curso.alumnos[i].calificacion;
    }
    return suma / curso.alumnos.length;
}

console.log("Promedio de calificaciones: ", promedio_calificaciones(curso));