$(document).ready(function() {
    $.getJSON('carrusel.json', function(data) {
        let indicators = '';
        let slides = '';

        data.forEach((item, index) => {
            const active = index === 0 ? 'active' : '';
            indicators += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${active}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
            slides += `
                <div class="carousel-item ${active}">
                    <a href="${item.url}"><img src="${item.imagen}" class="d-block w-100" alt="Imagen del último trabajo ${index + 1}"></a>
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="txt-amarillo">${item.titulo}</h2>
                        <h5 class="txt-amarillo">${item.descripcion}</h5>
                    </div>
                </div>
            `;
        });

        $('#carouselIndicators').html(indicators);
        $('#carouselInner').html(slides);
    });
});