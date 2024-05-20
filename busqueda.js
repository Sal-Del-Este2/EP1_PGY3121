$(document).ready(function() {
    $('#searchForm').on('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const query = $('#searchInput').val().toLowerCase();

        // Simulación de una solicitud a una API usando fetch con busqueda.json
        $.getJSON('busqueda.json', function(data) {
            // Buscar la entrada correspondiente al nombre ingresado
            const result = data.find(item => item.nombre.toLowerCase() === query);
            if (result) {
                window.location.href = result.url;
            } else {
                alert("No se encontraron resultados");
            }
        }).fail(function() {
            console.error("Error al realizar la búsqueda");
            alert("Ocurrió un error al realizar la búsqueda");
        });
    });
});