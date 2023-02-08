
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

        var producto = '<div style=" display:flex; width:100%; justify-content:space-between;">';

        $.each(data, function(key, value){
            producto += '<div class="producto" style="display:flex;align-items:center; gap:1rem; max-width:30%; flex-direction:column">';
            producto += '<h2>'+value.title+'</h2>';
            producto += '<p>'+value.text+'</p>';
            producto += '<a href="'+value.link+'" target="_blank" >Ver más</a>';
            producto += '<img src="'+value.image+'" alt="imagen no encontrada" style="width:200px">';
            producto += '</div>';
        });

        producto += '</div>';
        $('#productos').html(producto);

        }
    });
});


                                        //------------------------//
                                        //       Ejercicio 3      //
                                        //------------------------//

$(document).ready(function(){
    $.ajax({
        url: "testimonios.json",
        type: "GET",
        dataType: "json",
        error: $('#testimonios').html('Error al leer el archivo Json'),  // Manejamiento de error al leer archivo
        success: function(data){
        var testimonio = '<div style=" display:flex; width:100%; justify-content:space-between;">';
        $.each(data, function(key, value){
            testimonio += '<div class="testimonio" style="display:flex;align-items:center; flex-direction:column; margin:10px">';
            testimonio += '<h2>'+value.nombre+'</h2>';
            testimonio += '<p>'+value.fecha+'</p>';
            testimonio += '<p>'+value.texto+'</p>';
            testimonio += '</div>';
        });
        testimonio += '</div>';
        $('#testimonios').html(testimonio);
        }
    });
});


                                        //------------------------//
                                        //       Ejercicio 4      //
                                        //------------------------//

$(document).ready(function(){
    $.ajax({
        url: "testimonios.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
          // Obtén una lista de índices aleatorios para los testimonios
          var indices = [];
          var testimonio = '';
          while (indices.length < 3) {
            var index = Math.floor(Math.random() * data.length);
            if (!indices.includes(index)) {
              indices.push(index);
            }
          }

          var randomTestimonios = [];
          var testimonio = '<div style=" display:flex; width:100%; justify-content:space-between;">';

          for (var i = 0; i < indices.length; i++) {
            randomTestimonios.push(data[indices[i]]);
            testimonio += '<div class="testimonio_rand" style="display:flex;align-items:center; max-width:30%; flex-direction:column; margin:10px">';
            testimonio += '<h2>' + randomTestimonios[i]['nombre'] + '</h2>';
            testimonio += '<p>'+randomTestimonios[i]['fecha']+'</p>';
            testimonio += '<p>'+randomTestimonios[i]['texto']+'</p>';
            testimonio += '</div>';

          }
          testimonio += '</div>'
          $("#testimonios_rand").html(testimonio);
        },
        error: function(error) {
          console.log(error);
        }
      });
      
});
                                        

                                        //------------------------//
                                        //       Ejercicio 5      //
                                        //------------------------//

var vista_tabla = $("#vista_tabla").prop('checked');

if($("#vista_tabla").change(function(){

    
    $(document).ready(function(){
        $.ajax({
            url: "testimonios.json",
            type: "GET",
            dataType: "json",
    
            
            success: function(data) {
    
                var indices = [];
                var testimonio = '';
                while (indices.length < 3) {
                var index = Math.floor(Math.random() * data.length);
                if (!indices.includes(index)) {
                    indices.push(index);
                }

                var randomTestimonios = [];
                var testimonio = '<div style=" display:flex; width:100%; justify-content:space-between;">';
                
                }

                if(vista_tabla){
                    console.log(vista_tabla);

                    testimonio += '<table class="testimonio_tabla"> <style>table{border: 1px black solid} th{border: 1px black solid} td{border: 1px black solid} tr{border: 1px black solid}</style>';
                    testimonio += '<tr><th>Nombre</th><th>Fecha</th><th>Testimonio</th></tr>';

                    for (var i = 0; i < indices.length; i++) {
                        randomTestimonios.push(data[indices[i]]);

                        
                        
                        testimonio += '<tr>';
                        testimonio += '<td>' + randomTestimonios[i]['nombre'] + '</td>';
                        testimonio += '<td>' + randomTestimonios[i]['fecha']+'</td>';
                        testimonio += '<td>' + randomTestimonios[i]['texto']+'</td>';
                        testimonio += '<tr>';
                        
                    }
                    testimonio += '</table>';
                    $("#testimonios_rand_vistas").html(testimonio);
                    
                }
                else{
                    // Obtén una lista de índices aleatorios para los testimonios
                
                    console.log(vista_tabla);
                
    
                
                for (var i = 0; i < indices.length; i++) {
                randomTestimonios.push(data[indices[i]]);
                testimonio += '<div class="testimonio" style="display:flex;align-items:center; max-width:30%; flex-direction:column; margin:10px">';
                testimonio += '<h2>' + randomTestimonios[i]['nombre'] + '</h2>';
                testimonio += '<p>'+randomTestimonios[i]['fecha']+'</p>';
                testimonio += '<p>'+randomTestimonios[i]['texto']+'</p>';
                testimonio += '</div>';
    
                }
                
                testimonio += '</div>'
                $("#testimonios_rand_vistas").html(testimonio);
                }
    
    
                
            },
            error: function(error) {
                console.log(error);
            }
            });
            
    });


}));
console.log(vista_tabla);



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