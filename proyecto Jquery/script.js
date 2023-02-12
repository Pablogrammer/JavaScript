
                                        //------------------------//
                                        //       Ejercicio 1      //
                                        //------------------------//

//variable de validación para DNI
const valDni = /^[0-9]{8}[a-zA-Z]{1}$/;

//Inicializador de las funciones para la validación
$(document).ready(function () {

    //declaración de las variables de los campos para  
    let campoNombre = false;
    let campoTlf = false;
    let campoDni = false;
    let campoTexto = false;
    let campoFecha = false;

    //Si la función validarNombre es true convierte a visible el siguiente elemento de el form (telefono)
    //Si se modifica el campo y validarNombre pasa a ser false esconde todos los elementos por debajo

    $("#nombre").keyup(function () {
        if (validarNombre()){
            $(".tlf").prop( "disabled", false );
        }else{
            $(".tlf").prop( "disabled", true );
            $(".dni").prop( "disabled", true );
            $(".texto").prop( "disabled", true );
            $(".fecha").prop( "disabled", true );
            $("#enviar").prop( "disabled", true );
        }

    // Repite el mismo procedimiento
    $("#tlf").keyup(function(){
        if(validarTlf()){
            $(".dni").prop( "disabled", false );
        }else{
            $(".dni").prop( "disabled", true );
            $(".texto").prop( "disabled", true );
            $(".fecha").prop( "disabled", true );
            $("#enviar").prop( "disabled", true );
        }
    })

    // Repite el mismo procedimiento
    $("#dni").keyup(function(){
        if(validarDni()){
            $(".texto").prop( "disabled", false );
        }else{
            $(".texto").prop( "disabled", true );
            $(".fecha").prop( "disabled", true );
            $("#enviar").prop( "disabled", true );
        }
    })

    // Repite el mismo procedimiento
    $("#texto").keyup(function(){
        if(validarTexto()){
            $(".fecha").prop( "disabled", false );
        }else{
            $(".fecha").prop( "disabled", true );
            $("#enviar").prop( "disabled", true );
        }
    })

    // Repite el mismo procedimiento
    $("#fecha").focusout(function(){
        if(validarFecha()){
            $("#enviar").prop( "disabled", false );
        }else{
            $("#enviar").prop( "disabled", true );
        }
    })



    });
    
    //Valida que la longitud de el nombre sea mayor que 3
    function validarNombre() {
        let nombre = $("#nombre").val();
        if (nombre.length > 3) {
        campoNombre = true;
        return campoNombre;
        }
    }

    //Valida que el número de telefono contenga 9 digitos 
    function validarTlf() {
        let tlf = $("#tlf").val();
        if (tlf.length == 9) {
        campoTlf = true;
        return campoTlf;
        }
    }

    //Valida que el Dni contenga la validación declarara en la constante valDni
    function validarDni() {
        let dni = $("#dni").val();
        if (valDni.test(dni)) {
        campoDni = true;
        return campoDni;
        }
    }

    //Valida que el campo texto sea distinto a una cadena vacía
    function validarTexto() {
        let texto = $("#texto").val();
        if (texto !== "") {
        campoTexto = true;
        return campoTexto;
        }
    }

    //Valida que la fecha no esté vacía
    function validarFecha() {
        let fecha = $("#fecha").val()
        if (fecha != ""){
          campoFecha = true;
          return campoFecha;
        }
    }

})


                                        //------------------------//
                                        //       Ejercicio 2      //
                                        //------------------------//

$(document).ready(function(){
    $.ajax({
        url: "productos.json",
        type: "GET",
        dataType: "json",
        error: $('#productos').html('Error al leer el archivo Json'),  // Manejamiento de error al leer archivo
        success: function(data){

        var producto = '<div class="div_producto">';

        $.each(data, function(key, value){
            producto += '<div class="producto">';
            producto += '<h2>'+value.title+'</h2>';
            producto += '<p>'+value.text+'</p>';
            producto += '<a href="'+value.link+'" target="_blank" >Ver más</a>';
            producto += '<img class="imagen" src="'+value.image+'" alt="imagen no encontrada">';
            producto += '</div>';
        });

        producto += '</div>';
        $('#productos').html(producto);

        }
    });
});
                              

                                        //------------------------//
                                        // Ejercicio 3,4,5,6,8,9  //
                                        //------------------------//
var datos;

function intervalo() {
    var intentos = 0;
  
    function obtenerDatos() {
      $.getJSON("testimonios.json", function(data) {
        var indices = [];
        for (var i = 0; i < 3; i++) {
          var randomIndex = Math.floor(Math.random() * data.length);
          indices.push(data[randomIndex]);
          data.splice(randomIndex, 1);
        }
        mostrarTabla(indices);
      }).fail(function() {
        if (intentos < 5) {
          console.error("Error al cargar testimonios.json, intentando de nuevo...");
          intentos++;
          setTimeout(obtenerDatos, 5000);
        } else {
          console.error("Se superó el número máximo de intentos para cargar testimonios.json");
        }
      });
    }
  
    obtenerDatos();
  }
  

function mostrarTabla(data) {
    datos = data;

    var testimonio = '<div>';
    testimonio += '<table>';
    testimonio += '<tr><th>Nombre</th><th>Fecha</th><th>Testimonio</th></tr>';
    
    $.each(datos, function(key, value) {
        testimonio += '<tr>';
        testimonio += '<td>' + value.nombre + '</td>';
        testimonio += '<td>' + value.fecha + '</td>';
        testimonio += '<td>' + value.texto + '</td>';
        testimonio += '<tr>';
    });
    
    testimonio += '</table>';
    $("#output").fadeOut(500, function() {
    $(this).html(testimonio).fadeIn(500);
    });
}

function mostrarDiv(datos) {
    var testimonio = '<div class="div_testimonio">';
    $.each(datos, function(key, value) {
        testimonio += '<div class="testimonio" style="display:flex;align-items:center; flex-direction:column; margin:10px">';
        testimonio += '<h2>'+value.nombre+'</h2>';
        testimonio += '<p>'+value.fecha+'</p>';
        testimonio += '<p>'+value.texto+'</p>';
        testimonio += '</div>';
    });
    testimonio += '</div>';
    $("#output").fadeOut(500, function() {
    $(this).html(testimonio).fadeIn(500);
    });
}

$("#btn-table").click(function() {
    mostrarTabla(datos);
});

$("#btn-divs").click(function() {
    mostrarDiv(datos);
    });

    intervalo();
    setInterval(intervalo, 10000);


                                        //------------------------//
                                        //       Ejercicio 7      //
                                        //------------------------//
$(document).ready(function(){
    $("#top-btn").click(function(){
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });