$(function () {
    $("form[name='login']").validate({
        rules: {
            Login: {
                required: true,
                Login: true
            },
            Contraseña: {
                required: true,
            },
            Tipo: {
                required: true,
            }
        },
        messages: {
            Login: "Por favor, introduce un usario válida",
            Contraseña: {
                required: "Por favor, ingrese contraseña",
            },
            TipoUsuario:"Obligatorio"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});


