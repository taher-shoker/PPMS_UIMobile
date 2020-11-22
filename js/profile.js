
$('#update').click(function(){
    $(this).removeClass('show')
    $('#save').addClass('show')
    $('#name').removeAttr('readonly')
    $('#email').removeAttr('readonly')
    $('#phone').removeAttr('readonly')
})
$('#save').click(function(){
    $(this).removeClass('show')
    $('#update').addClass('show')
    $('#name').attr('readonly','readonly')
    $('#email').attr('readonly','readonly')
    $('#phone').attr('readonly','readonly')


})

$('#edit-profile').click(function(){
    window.location.replace('editProfile.html')
})

$('#join-now').click(function(){
    window.location.replace('payment.html')
})