$(document).ready(function() {
    var url = 'data/response.json'

    $('#Jtabla').DataTable({
        destroy: true,
        select: true,
        "scrollX": true,
        ajax: {
            url: `${url}`,
            dataSrc: ''
        },
        "columns": [
            { "data": "id_origen" },
            { "data": "origen" },
            { "data": "id_producteca" },
            { "data": "id_sap" },
            { "data": "fecha_obtencion" },
            { "data": "nombre" },
            { "data": "nick_name" },
            { "data": "numero_dni" },
            { "data": "materiales" },
            { "data": "precio_total" },
            { "data": "etiqueta" }
        ]
    });
});