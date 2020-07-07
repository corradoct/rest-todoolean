$(document).ready(
  function() {

    var apiRequest = 'http://157.230.17.132:3006/todos/';

    getList(apiRequest);

    // Creo l'evento al click del bottone
    $('#send').on('click',
      function() {
        // Creo la variabile della ricerca utente
        var userInput = $('#inputBar').val();
        console.log(userInput);

        // Resetto la lista se eventualmente ci sono già risultati
        reset();

        // Se la barra di ricerca ha un valore avvio la chiamata ajax
        if (userInput !== '') {
          // Invoco la funzione per la chiamata ajax e gli passo le variabili per la richiesta
          ajaxCall(userInput);
        } else {  // Altrimenti do un messaggio di errore
          var message = 'Non hai inserito nessuna parola';
          printMessage(message);
        }
      }
    );

    // Creo l'evento alla pressione del tasto invio
    $('#inputBar').keypress(
      function(event) {
        if (event.which === 13) {
          // Creo la variabile della ricerca utente
          var userInput = $('#inputBar').val();
          console.log(userInput);

          // Resetto la lista se eventualmente ci sono già risultati
          reset();

          // // Se la barra di ricerca ha un valore avvio la chiamata ajax
          if (userInput !== '') {
            // Invoco la funzione per la chiamata ajax e gli passo le variabili per la richiesta
            ajaxCall(userInput);
          } else {  // Altrimenti do un messaggio di errore
            var message = 'Non hai inserito nessuna parola';
            printMessage(message);
          }
        }
      }
    );

    $('.delete').on('click',
      function() {
        alert('ciao');
        // var thisId = $(this).parent('li').attr('data_id');
        // removeListItem(apiRequest, thisId);
      }
    );


  }
);
