function formulario(){
    alert("Hola mundo");
}

function ValidarRut() {
    var rut=document.getElementById("txtRut").value;
    var largo=rut.length;
    if(largo!=8){
        alert("rut mal ingresado");
        return;
    }
    var suma=0; var mult = 3;
    for (index = 0; index <8; index++){
        var caracter=rut.substring(index, index+1)
        suma=suma+ (parseInt(caracter)*mult);
        mult--;
        if(mult==1){
            mult=7;
        }
    }
    var resi=suma % 11;
    var dv = 11 - resi;
    alert(dv);
}
    
