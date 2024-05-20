$(document).ready(function() {
    let data = [];

    // Cargar data.json
    $.getJSON('data.json', function(response) {
        data = response;
    });

    // Manejar la entrada del usuario en el campo de búsqueda
    $('#searchInput').on('input', function() {
        const query = $(this).val().toLowerCase();
        const suggestions = data.filter(item => item.nombre.toLowerCase().includes(query));
        showSuggestions(suggestions);
    });

    // Mostrar sugerencias
    function showSuggestions(suggestions) {
        const suggestionsContainer = $('#suggestions');
        suggestionsContainer.empty();
        suggestions.forEach(suggestion => {
            const suggestionItem = $('<div class="suggestion-item"></div>').text(suggestion.nombre);
            suggestionItem.on('click', function() {
                navigateTo(suggestion.url);
            });
            suggestionsContainer.append(suggestionItem);
        });
    }
});

function navigateTo(url) {
    window.location.href = url;
}