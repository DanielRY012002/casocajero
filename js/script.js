class Cuenta{
    constructor(password,monto){
        this.password=password;
        this.monto=monto;
    };
};
var datos=[];
function prueba() {
    var cuenta=new Cuenta("123456789",9500);
    datos.push(cuenta);
}
function login() {
    prueba();
    if (document.getElementById("resultado").value==datos[0].password) {
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
    } else {
        document.getElementById("ingreso").innerHTML="Contraseña Incorrecta";
    }
}
function retirogo() {
    var retiro=document.getElementById("monto").value,montoactual=datos[0].monto;
    if (retiro%10==0) {
        if (montoactual>retiro) {
            datos[0].monto=montoactual-retiro;
        alert(datos[0].monto);
        } else {
            alert("saldo insuficiente");
        }
    } else {
        alert("ERROR")
    }
}
function limpiar() {
    document.getElementById("resultado").value="";
}
function retiro() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function retiro2() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro3() {
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla5").style.display="block";
    document.getElementById("teclado1").style.display="none";
    document.getElementById("teclado2").style.display="block";
}
document.getElementById("n1").addEventListener("click",n1);
function n1(){ 
    let sumado=document.getElementById("n1").innerHTML;
    var elemento=document.getElementById("resultado");
    var value=elemento.value;
    elemento.value=value + sumado;
 }
document.getElementById("n11").addEventListener("click",n11);
function n11(){ 
    let sumado=document.getElementById("n11").innerHTML;
    var elemento=document.getElementById("monto");
    var value=elemento.value;
    elemento.value=value + sumado;
}

 var elemento=document.getElementById("monto");
document.getElementById("n2").addEventListener("click",n2);
function n2(){ 
    let sumado=document.getElementById("n2").innerHTML;
    var elemento=document.getElementById("resultado");
    var value=elemento.value;
    elemento.value=value + sumado;
}
 document.getElementById("n22").addEventListener("click",n22);
function n22(){ 
    let sumado=document.getElementById("n22").innerHTML;
    var elemento=document.getElementById("monto");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("n3").addEventListener("click",n3);
function n3(){ 
    let sumado=document.getElementById("n3").innerHTML;
    var elemento=document.getElementById("resultado");
    var value=elemento.value;
    elemento.value =value+sumado;
}
 document.getElementById("n33").addEventListener("click",n33);
function n33(){ 
    let sumado=document.getElementById("n33").innerHTML;
    var elemento=document.getElementById("monto");
    var value=elemento.value;
    elemento.value =value+sumado;
}
document.getElementById("n4").addEventListener("click",n4);
function n4(){ 
    let sumado = document.getElementById("n4").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
 document.getElementById("n44").addEventListener("click",n44);
function n44(){ 
    let sumado = document.getElementById("n44").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n5").addEventListener("click",n5);
function n5(){ 
    let sumado = document.getElementById("n5").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
 document.getElementById("n55").addEventListener("click",n55);
function n55(){ 
    let sumado = document.getElementById("n55").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n6").addEventListener("click",n6);
function n6(){ 
    let sumado = document.getElementById("n6").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n66").addEventListener("click",n66);
function n66(){ 
    let sumado = document.getElementById("n66").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n7").addEventListener("click",n7);
function n7(){ 
    let sumado = document.getElementById("n7").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("n77").addEventListener("click",n77);
function n77(){ 
    let sumado = document.getElementById("n77").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
document.getElementById("n8").addEventListener("click",n8);
function n8(){ 
    let sumado = document.getElementById("n8").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n88").addEventListener("click",n88);
function n88(){ 
    let sumado = document.getElementById("n88").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n9").addEventListener("click",n9);
function n9(){ 
    let sumado = document.getElementById("n9").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("n99").addEventListener("click",n99);
function n99(){ 
    let sumado = document.getElementById("n99").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("n0").addEventListener("click",n0);
function n0(){ 
    let sumado = document.getElementById("n0").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("n00").addEventListener("click",n00);
function n00(){ 
    let sumado = document.getElementById("n00").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("np").addEventListener("click",np);
function np(){ 
    let sumado = document.getElementById("np").innerHTML;
    var elemento = document.getElementById("resultado");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("npp").addEventListener("click",npp);
function npp(){ 
    let sumado = document.getElementById("npp").innerHTML;
    var elemento = document.getElementById("monto");
    var value = elemento.value;
    elemento.value = value + sumado;
}