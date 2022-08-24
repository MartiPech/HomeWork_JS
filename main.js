class Promedio{
    constructor(materia ,nota){
        this.materia = materia;
        this.nota = nota; 

    }

    
}

lista_materias =[];
lista_de_notas = [];
for(let i= 0  ; i <3 ; i++){
    let materia = prompt("ingresa materia");
    let nota = parseInt( prompt("ingresa nota"));
    
    let ingreso_datos = new Promedio(materia, nota);
    lista_materias.push(ingreso_datos);

}
console.log(lista_materias);


/*-------------------------------------------*/
for(numero of lista_materias){
    lista_de_notas.push(numero.nota)
}
console.log(lista_de_notas);
/*--------------------------------------------------*/


let sum = 0
for(let j = 0 ; j>lista_de_notas.lenght;j++){
    
    sum += lista_de_notas[j]
    
}

 console.log(sum);

 alert("El promedio es de : " + sum/lista_de_notas.lenght);







