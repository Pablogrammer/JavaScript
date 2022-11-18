window.onload = iniciar;

var h1 = 0;
var m1 = 0;
var s1 = 0;

min = 0;
sec = 0;

function crono(){

    tiempo = setInterval(escribir_crono,1000);
    }



function iniciar(){

    document.getElementById("result_crono").innerHTML= "00:00:00";
    document.getElementById("result_cuenta").innerHTML = "00:00";
    
}

function escribir_crono(){
    global = h1,m1,s1;
    var h2,m2,s2;
    s1++;

    if (s1>59){
        m1++;s1=0;}

    if (m1>59){
        h1++;
        m1=0;}

    if (h1>24){
        h1=0;}

    if (s1<10){
        s2="0"+s1;}
        else{
            s2=s1;}

    if (m1<10){
        m2="0"+m1;}
        else{
            m2=m1;}

    if (h1<10){
        h2="0"+h1;}
        else{
            h2=h1;}

    document.getElementById("result_crono").innerHTML = h2 + ":" + m2 + ":" + s2; 
}

function parar(){
    clearInterval(tiempo);

}
function reiniciar(){
    clearInterval(tiempo);
    h1 = 0;
    m1 = 0;
    s1 = 0;
    iniciar();
    crono();
}

function filtro_cuenta(){
    global =  min,sec;
    min = document.getElementById("min").value;
    sec = document.getElementById("sec").value;

    if (min > 60 || min < 0 || sec > 60 || sec < 0){
        document.getElementById("result_cuenta").innerHTML = "Estos datos no son válidos";
    }
    else{
        cuenta = setInterval(cuenta_atras,1000);
    }
}

function cuenta_atras(){
    global = min,sec;
    var m2,s2;

    if (sec==0){
        min--;
        sec=59;}

    if (sec<10){
        s2="0"+sec;}
        else{
            s2=sec;}
            
    if (min<10){
        m2="0"+min;}
        else{
            m2=min;}
   
    document.getElementById("result_cuenta").innerHTML = m2 + ":" + s2; 
    
    if(min == -1 && sec == 59){
        document.getElementById("result_cuenta").innerHTML = "Boom";
        clearInterval(cuenta);
    }

    sec--;
}