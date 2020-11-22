
/***************Get Values from sessinoStorage ************/
var title = sessionStorage.getItem('title'),
    subTitle = sessionStorage.getItem('subTitle'),
    text = sessionStorage.getItem('text'),
    image = sessionStorage.getItem('image')


/******************set values in html Tags  ****************/
 $('#history-title').html(title)   
 $('.title-insurnce h5').html(subTitle)
 $('.description-insurnce p').html(text)
 $("#background-pic").attr("src",image);

 /***************** Get Values from inputs feilds form *******************/
 var companyInput = document.getElementById('company'),
     personInput = document.getElementById('person'),
     phoneInput = document.getElementById('phone'),
     emailInput = document.getElementById('email'),
     messageInput = document.getElementById('message')

     

    $('#company-submit').click(function(){
        login()
    })  

    ///Login Function
function login() {

    var company = companyInput.value,
        person = personInput.value,
        phone = phoneInput.value,
        email = emailInput.value,
        message = messageInput.value
       
        if (company ==='' && person === ''&& phone === ''&& email === ''&& message === '') {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                timer: 2000,
                animation: false,
                customClass: {
                  popup: 'animate__animated animate__fadeInUp'
                }
              })
        }
     
        
   
      

    


}



/************************************ */


    
    $(document).ready(function(){
    
        var current_fs, next_fs, previous_fs;
        
        $(".next").click(function(){
        
        str1 = "next1";
        str2 = "next2";
        
      
        current_fs = $(this).parent().parent().parent();
        next_fs = $(this).parent().parent().parent().next();
        
        $(current_fs).removeClass("show");
        $(next_fs).addClass("show");
        
        $("#progressbar li").eq($(".card").index(next_fs)).addClass("active");
        
        current_fs.animate({}, {
        step: function() {
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        
        next_fs.css({
        'display': 'block'
        });
        }
        });
       /*  } */
        });
        
        $(".prev").click(function(){
        
        current_fs = $(this).context.parentElement.offsetParent.classList[0];
        previous_fs = $(this).context.parentElement.offsetParent.previousElementSibling;
        console.log(previous_fs)
        
        $('.'+current_fs).removeClass("show");
        $(previous_fs).addClass("show");
        
        $("#progressbar li").eq($(".card").index(next_fs)).removeClass("active");
        
        $('.'+current_fs).animate({}, {
        step: function() {
        
        $('.'+current_fs).css({
        'display': 'none',
        'position': 'relative'
        });
        
        previous_fs.css({
        'display': 'block'
        });
        }
        });
        });
        
        });
    
    
        $('#switch').click(function(){
            $('.options').toggleClass('show')
        })
    $('#finish').click(function(){
        Swal.fire({
            type: 'success',
            title: 'Thank You !',
            text: 'An estimation will be sent on your email address.',
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
        
        