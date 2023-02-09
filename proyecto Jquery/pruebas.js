var datos;

$.getJSON("testimonios.json", function(data) {
    // selecciona tres elementos aleatorios
    var selectedData = [];
    for (var i = 0; i < 3; i++) {
      var randomIndex = Math.floor(Math.random() * data.length);
      selectedData.push(data[randomIndex]);
      data.splice(randomIndex, 1);
    }

    // muestra los tres elementos seleccionados como divs
    showTable(selectedData);

  });
  
  function showTable(data) {
    datos = data;

    var testimonio = '<div style=" display:flex; width:100%; justify-content:space-between;">';
    testimonio += '<table class="testimonio_tabla"> <style>table{border: 1px black solid} th{border: 1px black solid} td{border: 1px black solid} tr{border: 1px black solid}</style>';
    testimonio += '<tr><th>Nombre</th><th>Fecha</th><th>Testimonio</th></tr>';
    
    $.each(datos, function(key, value) {
        testimonio += '<tr>';
        testimonio += '<td>' + value.nombre + '</td>';
        testimonio += '<td>' + value.fecha + '</td>';
        testimonio += '<td>' + value.texto + '</td>';
        testimonio += '<tr>';
    });
    
    testimonio += '</table>';
    $("#output").html(testimonio);
  }
  
  function showDivs(datos) {
    var testimonio = '<div style=" display:flex; width:100%; justify-content:space-between;">';
    $.each(datos, function(key, value) {
        testimonio += '<div class="testimonio" style="display:flex;align-items:center; flex-direction:column; margin:10px">';
        testimonio += '<h2>'+value.nombre+'</h2>';
        testimonio += '<p>'+value.fecha+'</p>';
        testimonio += '<p>'+value.texto+'</p>';
        testimonio += '</div>';
    });
    testimonio += '</div>';
    $("#output").html(testimonio);
  }

  $("#btn-table").click(function() {
    showTable(datos);
  });
  
  $("#btn-divs").click(function() {
    showDivs(datos);
  });

