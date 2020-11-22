$('#payment').click(function(){
    Swal.fire({

        title: '<h6>تعليمات الدفع</h6>',
        text: ' من فضلك توجه الى أقرب فرع وقوم بدفع إجمالى المبلغ ',
        timer:4000,
        animation: false,
       
        customClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
         onClose: () => {
            window.location.replace('home.html')
        } 
      })

})