$(document).ready(function() {
     $('.quadrato').click(function() {
        var numero = $(this);
      // console.log($(this));
     $.ajax(
        {
          'url': "https://flynn.boolean.careers/exercises/api/random/int",
          'method': "GET",
          'success': function (risposta) {
            // console.log(testo);
            numero.text(risposta.response);
            if (risposta.response <= 5) {
                $(".quadrato").addClass("yellow")
            } else if (risposta.response > 6) {
                $(".quadrato").addClass("green")
            }
          },
          'error': function () {
            alert("E' avvenuto un errore. ");
          }
        }
      );
    });
  
  });