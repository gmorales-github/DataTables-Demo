$(document).ready(function() {
    $('#Jtabla').DataTable({
        "scrollX": true,
        ajax: {
            url: 'data/response.json',
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