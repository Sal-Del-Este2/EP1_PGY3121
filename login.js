$(document).ready(function() {
    $('#inicioSesionForm').on('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto
        
        // Obtener valores de los campos
        var usuario = $('#usuario').val();
        var contrasena = $('#password').val(); // Cambio aquí para coincidir con el ID del campo de contraseña
        var errorDiv = $('#error');
        
        // Reiniciar mensajes de error
        errorDiv.html('');

        // Obtener usuarios del localStorage
        var usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Buscar usuario en el localStorage
        var usuarioEncontradoLocalStorage = usuariosLocalStorage.find(function(user) {
            return user.nombre === usuario && user.password === contrasena;
        });

        if (usuarioEncontradoLocalStorage) {
            redirigirUsuario(usuarioEncontradoLocalStorage.nombre);
        } else {
            // Leer lista de usuarios desde el archivo JSON
            $.getJSON('usuarios.json', function(data) {
                // Verificar credenciales ingresadas por el usuario
                var usuarioEncontradoJson = data.find(function(user) {
                    return user.nombre === usuario && user.password === contrasena;
                });

                if (usuarioEncontradoJson) {
                    redirigirUsuario(usuarioEncontradoJson.nombre);
                } else {
                    errorDiv.append('<p>Usuario o contraseña incorrectos.</p>');
                }
            }).fail(function() {
                errorDiv.append('<p>Error al cargar usuarios.</p>');
            });
        }
    });

    function redirigirUsuario(nombreUsuario) {
        // Redirigir a la página correspondiente según el usuario
        if (nombreUsuario === 'esteban') {
            window.location.href = "esteban.html";
        } else if (nombreUsuario === 'nicolas') {
            window.location.href = 'nicolas.html';
        } else if (nombreUsuario === 'juan') {
            window.location.href = 'juan.html';
        } else {
            // Si el usuario no es Esteban, Nicolas o Juan, redirigir al index.html
            window.location.href = 'index.html';
        }
    }
});