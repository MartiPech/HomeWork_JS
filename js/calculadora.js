function limpiar(){
    document.getElementById('miFormulario').reset();
}

function sumar(){
    var x = parseInt( document.getElementById('valor1').value);
    var y = parseInt( document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = (x+y);
}

function restar(){
    var x = parseInt( document.getElementById('valor1').value);
    var y = parseInt( document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = (x-y);
}

function multiplicar(){
    var x = parseInt( document.getElementById('valor1').value);
    var y = parseInt( document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = (x*y);
}

function dividir(){
    var x = parseInt( document.getElementById('valor1').value);
    var y = parseInt( document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = (x/y);
}

let btn_add = document.getElementById('agregar');





btn_add.addEventListener("click" , function(){


    let resultado__ = document.getElementById('el-resultado');
    let lista__ = document.getElementById("lista");


    let li = document.createElement("li");

    li.innerHTML = `<span>${resultado__.value}</span>`;

    lista.append(li);


    


});






