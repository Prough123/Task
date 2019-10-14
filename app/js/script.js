$(document).ready(function(){

   $('#test form').validate({
    rules: {
        name: "required",
        surname: "required",
        message: "required"
    },
    messages: {
        name: "Заполните поле",
        surname: "Заполните поле",
        message: "Заполните поле"
    },
    
   })  

});