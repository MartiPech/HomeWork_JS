let opcion = prompt("Opcion A para tabla de multiplicar \nOpcion B para cotizar dolar a pesos Argentinos  "  )

switch(opcion){
    case "A" :  
    let numero = parseInt( prompt("Ingresa un numero para saber si tabla") );

        
            for (let i=0; i <= 10 ; i++){
                let resultado = numero *i; 
                document.write(`${numero} x ${i} = ${resultado}  <br/>  `)
            
        
            
            }
        break; 
    

case "B":
    let dolar_pesos = parseInt( prompt("ingresa el valor que queres calcular"));
    let dolar = 288;

    let cotizacion = dolar_pesos* dolar;
    document.write( "$ " + cotizacion +" Pesos Argentinos" )
    break;


default :
alert("Elegi papi, A o B" );
break;
}

