$('.email-field-btn').click(()=>{
    let email = $('#email').val();
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailFormat.test(email)){
        $('.error').css('display','none');
        $('#email').css('border','none');
    }
    else{
        $('.error').css('display','block');
        $('#email').css('border','1px solid hsl(0, 100%, 63%)');
    }
})