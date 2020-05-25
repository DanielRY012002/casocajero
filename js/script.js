class Cuenta{
    constructor(password,monto,nombre){
        this.password=password;
        this.monto=monto;
        this.nombre=nombre;
    };
};
class Movimientos{
    constructor(monto,fecha,hora){
        this.monto=monto;
        this.fecha=fecha;
        this.hora=hora;
    };
};
var datos=[];
var registro=[];
var dolar=3.43,i=0;
function prueba() {
    var cuenta=new Cuenta("123456789",9500,"ROJAS YAURIMA DANIEL ENRIQUE");
    datos.push(cuenta);
}
function login() {
    prueba();
    if (document.getElementById("resultado").value==datos[0].password) {
        document.getElementById("resultado").value=""
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
    } else {
        document.getElementById("ingreso").innerHTML="Contraseña Incorrecta";
    }
}
function retirogo() {
    var retiro=document.getElementById("monto").value,montoactual=datos[0].monto;
    if (retiro=="") {
        document.getElementById("pantalla-error").innerHTML="Ingresar Monto";
    } else {
        if (retiro%10==0) {
            if (montoactual>retiro) {
                datos[0].monto=montoactual-retiro;
                i++;
                registrarretiro(retiro);
                document.getElementById("monto").value=""
                document.getElementById("pantalla5").style.display="none";
                document.getElementById("pantalla6").style.display="block";
            } else {
                document.getElementById("pantalla-error").innerHTML="Saldo Insuficiente";
            }
        } else {
            document.getElementById("pantalla-error").innerHTML="Multiplos de 10";
        }
    }
}
function retirogod() {
    var retiro=document.getElementById("montodolar").value,montoactual=datos[0].monto;
    if (retiro=="") {
        document.getElementById("pantalla-errord").innerHTML="Ingresar Monto";
    } else {
        if (retiro%10==0) {
            var nuevoretiro=retiro*dolar;
            if (montoactual>retiro) {
                datos[0].monto=montoactual-nuevoretiro;
                i++;
                registrarretiro(nuevoretiro);
                document.getElementById("montodolar").value=""
                document.getElementById("pantalla15").style.display="none";
                document.getElementById("pantalla16").style.display="block";
            } else {
                document.getElementById("pantalla-errord").innerHTML="Saldo Insuficiente";
            }
        } else {
            document.getElementById("pantalla-errord").innerHTML="Multiplos de 10";
        }
    }
}
function retiro20go() {
    var retiro=20,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla9").style.display="none";
        document.getElementById("pantalla6").style.display="block";
    } else {
        document.getElementById("pantalla-error1").innerHTML="Saldo Insuficiente";
    }
}
function retiro20dgo() {
    var retiro=20*dolar,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla17").style.display="none";
        document.getElementById("pantalla16").style.display="block";
    } else {
        document.getElementById("pantalla-error11").innerHTML="Saldo Insuficiente";
    }
}
function retiro150dgo() {
    var retiro=150*dolar,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla18").style.display="none";
        document.getElementById("pantalla16").style.display="block";
    } else {
        document.getElementById("pantalla-error22").innerHTML="Saldo Insuficiente";
    }
}
function retiro150go() {
    var retiro=150,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla10").style.display="none";
        document.getElementById("pantalla6").style.display="block";
    } else {
        document.getElementById("pantalla-error2").innerHTML="Saldo Insuficiente";
    }
}
function retiro300go() {
    var retiro=300,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla11").style.display="none";
        document.getElementById("pantalla6").style.display="block";
    } else {
        document.getElementById("pantalla-error3").innerHTML="Saldo Insuficiente";
    }
}
function retiro300dgo() {
    var retiro=300*dolar,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla19").style.display="none";
        document.getElementById("pantalla16").style.display="block";
    } else {
        document.getElementById("pantalla-error33").innerHTML="Saldo Insuficiente";
    }
}
function retiro100go() {
    var retiro=100,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla12").style.display="none";
        document.getElementById("pantalla6").style.display="block";
    } else {
        document.getElementById("pantalla-error4").innerHTML="Saldo Insuficiente";
    }
}
function retiro100dgo() {
    var retiro=100*dolar,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla20").style.display="none";
        document.getElementById("pantalla16").style.display="block";
    } else {
        document.getElementById("pantalla-error44").innerHTML="Saldo Insuficiente";
    }
}
function retiro200dgo() {
    var retiro=200*dolar,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla21").style.display="none";
        document.getElementById("pantalla16").style.display="block";
    } else {
        document.getElementById("pantalla-error55").innerHTML="Saldo Insuficiente";
    }
}
function retiro200go() {
    var retiro=200,montoactual=datos[0].monto;
    if (montoactual>retiro) {
        datos[0].monto=montoactual-retiro;
        i++;
        registrarretiro(retiro);
        document.getElementById("pantalla13").style.display="none";
        document.getElementById("pantalla6").style.display="block";
    } else {
        document.getElementById("pantalla-error5").innerHTML="Saldo Insuficiente";
    }
}
function retiro20cancelar() {
    document.getElementById("pantalla-error1").innerHTML="";
    document.getElementById("pantalla9").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro20dcancelar() {
    document.getElementById("pantalla-error11").innerHTML="";
    document.getElementById("pantalla17").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function retiro150cancelar() {
    document.getElementById("pantalla-error2").innerHTML="";
    document.getElementById("pantalla10").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro150dcancelar() {
    document.getElementById("pantalla-error22").innerHTML="";
    document.getElementById("pantalla18").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function retiro300cancelar() {
    document.getElementById("pantalla-error3").innerHTML="";
    document.getElementById("pantalla11").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro300dcancelar() {
    document.getElementById("pantalla-error33").innerHTML="";
    document.getElementById("pantalla19").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function retiro100cancelar() {
    document.getElementById("pantalla-error4").innerHTML="";
    document.getElementById("pantalla12").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro100dcancelar() {
    document.getElementById("pantalla-error44").innerHTML="";
    document.getElementById("pantalla20").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function retiro200cancelar() {
    document.getElementById("pantalla-error5").innerHTML="";
    document.getElementById("pantalla13").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiro200dcancelar() {
    document.getElementById("pantalla-error55").innerHTML="";
    document.getElementById("pantalla21").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function limpiar() {
    document.getElementById("resultado").value="";
}
function limpiar2() {
    document.getElementById("monto").value="";
}
function limpiar3() {
    document.getElementById("montodolar").value="";
}
function retiro20s(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla9").style.display="block";
}
function retiro20d(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla17").style.display="block";
}
function retiro150s(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla10").style.display="block";
}
function retiro150d(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla18").style.display="block";
}
function retiro300s(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla11").style.display="block";
}
function retiro300d(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla19").style.display="block";
}
function retiro100s(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla12").style.display="block";
}
function retiro100d(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla20").style.display="block";
}
function retiro200s(){
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla13").style.display="block";
}
function retiro200d(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla21").style.display="block";
}
function retiro() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function cancelaretiro2() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function consulta() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla8").style.display="block";
    document.getElementById("nombre").innerHTML=datos[0].nombre;
    document.getElementById("montoactual").innerHTML=datos[0].monto;
}
function ultimosmovimientos(){
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla22").style.display="block";
    lista();
}
function consulta_menu() {
    document.getElementById("pantalla8").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function retiro2() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retirodolar() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function cancelaretiro3() {
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function cancelaretirod(){
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla3").style.display="block";  
}
function retiro3() {
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla5").style.display="block";
    document.getElementById("teclado1").style.display="none";
    document.getElementById("teclado3").style.display="none";
    document.getElementById("teclado2").style.display="block";
}
function retirod() {
    document.getElementById("pantalla14").style.display="none";
    document.getElementById("pantalla15").style.display="block";
    document.getElementById("teclado1").style.display="none";
    document.getElementById("teclado2").style.display="none";
    document.getElementById("teclado3").style.display="block";
}
function cancelaretiro4() {
    document.getElementById("pantalla-error").innerHTML="";
    document.getElementById("monto").value=""
    document.getElementById("pantalla5").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function cancelaretirod4() {
    document.getElementById("pantalla-errord").innerHTML="";
    document.getElementById("montodolar").value=""
    document.getElementById("pantalla15").style.display="none";
    document.getElementById("pantalla14").style.display="block";
}
function retiroterminado() {
    document.getElementById("pantalla6").style.display="none";
    document.getElementById("pantalla7").style.display="block";
}
function retirodterminado() {
    document.getElementById("pantalla16").style.display="none";
    document.getElementById("pantalla7").style.display="block";
}
function retiro_menu(){
    document.getElementById("pantalla7").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function movimientos_menu(){
    document.getElementById("pantalla22").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function retirotravez(){
    document.getElementById("pantalla6").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retirodtravez(){
    document.getElementById("pantalla16").style.display="none";
    document.getElementById("pantalla14").style.display="block";
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
document.getElementById("n111").addEventListener("click",n111);
function n111(){ 
    let sumado=document.getElementById("n111").innerHTML;
    var elemento=document.getElementById("montodolar");
    var value=elemento.value;
    elemento.value=value + sumado;
}
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
document.getElementById("n222").addEventListener("click",n222);
function n222(){ 
    let sumado=document.getElementById("n222").innerHTML;
    var elemento=document.getElementById("montodolar");
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
document.getElementById("n333").addEventListener("click",n333);
function n333(){ 
    let sumado=document.getElementById("n333").innerHTML;
    var elemento=document.getElementById("montodolar");
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
document.getElementById("n444").addEventListener("click",n444);
function n444(){ 
    let sumado = document.getElementById("n444").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("n555").addEventListener("click",n555);
function n555(){ 
    let sumado = document.getElementById("n555").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("n666").addEventListener("click",n666);
function n666(){ 
    let sumado = document.getElementById("n666").innerHTML;
    var elemento = document.getElementById("montodolar");
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
 document.getElementById("n777").addEventListener("click",n777);
function n777(){ 
    let sumado = document.getElementById("n777").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("n888").addEventListener("click",n888);
function n888(){ 
    let sumado = document.getElementById("n888").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("n999").addEventListener("click",n999);
function n999(){ 
    let sumado = document.getElementById("n999").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("n000").addEventListener("click",n000);
function n000(){ 
    let sumado = document.getElementById("n000").innerHTML;
    var elemento = document.getElementById("montodolar");
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
document.getElementById("nppp").addEventListener("click",nppp);
function nppp(){ 
    let sumado = document.getElementById("nppp").innerHTML;
    var elemento = document.getElementById("montodolar");
    var value = elemento.value;
    elemento.value = value + sumado;
}
function actualizarHora(){
    var momentoactual=new Date(),
    hora=momentoactual.getHours();
    minuto=momentoactual.getMinutes();
    segundo=momentoactual.getSeconds();
    dia=momentoactual.getDate();
    mes=momentoactual.getMonth()+1;
    anio=momentoactual.getFullYear();
    horaactual= String(hora+":"+minuto+":"+segundo);
    fechaactual=String(dia+"/"+mes+"/"+anio);
    document.getElementById("hora").innerHTML=horaactual;
    document.getElementById("fecha").innerHTML=fechaactual;
}
function registrarretiro(monto) {
    fecha=document.getElementById("fecha").value
    hora=document.getElementById("hora").value
    var movimientos=new Movimientos(monto,fecha,hora);
    registro.push(movimientos);
}
var intervalo=setInterval(actualizarHora,1000);
function lista(){
    registro.forEach(element => {
        console.log(element)
    });
}