$(document).on('ready', function() {

    //initially hide form
    $('#user-input-form').hide();
    //toggle show/hide form
    $('#collapse-form').on('click', function() {
        copyInfoToForm();
        $('#user-input-form').slideToggle("slow");
    })

    // SUBMIT BUTTON
    // $('#user-input-form input[type="submit"]').on('click', function() {
    //     copyFormToInfo();
    //     return false;
    // })

    var copyInfoToForm = function() {
        $('#form-name').val($('#user-name').text());
        $('#form-bio').val($('#user-bio').text());
        $('#form-books').val($('#user-books').text());
        $('#form-javascript').val($('#user-javascript').text());
    }

    // var copyFormToInfo = function() {
    //     $('#user-name').text($('#form-name').val());
    //     $('#user-bio').text($('#form-bio').val());
    //     $('#user-books').text($('#form-books').val());
    //     $('#user-javascript').text($('#form-javascript').val());
    // }

    // LISTENER FOR ALL INPUT
    $('.form-input').keyup(function() {
        $('#user-' + $(this).attr('id').split('-')[1]).text($(this).val());
    })


});