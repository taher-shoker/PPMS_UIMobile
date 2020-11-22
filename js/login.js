
var nameInput = document.getElementById('name'),
    passwordInput = document.getElementById('password');

/****************************** */
 

///Login Function
function login() {

    var name = nameInput.value,
        password = passwordInput.value; 
       
    
    if (name ==='' && phone === '') {
      
    }
   
    


}

/*********Script when click on login btn************* */
$('#login').on('click', function (e) {
    e.preventDefault()
    login()

})
/*********Script when click on login btn************* */
$('#create').on('click', function (e) {
  e.preventDefault()
  window.location.replace('register.html')

})


