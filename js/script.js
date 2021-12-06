$(document).ready(function() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });

    $('#Jtabla').DataTable({
        "scrollX": false
    });

});