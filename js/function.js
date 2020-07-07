//  ********************  FUNZIONI  ***************************  //

// Funzione che effettua una chiamata ajax ad un API e stampa i risultati tramite l'invocazione di un'altra Funzione
// Argomenti
//          ==>
//              userInput: indica la query da ricercare ( valore inserito dall'utente )
// Non ha nessun return
function getList(api) {

  $.ajax(
    {
      url: api,
      method: 'GET',
      success: function(dataResponse) {
        if (dataResponse.length > 0) {
          printList(dataResponse);
        } else {
          var message = 'La tua ricerca non ha prodotto risultati';
          printMessage(message);
        }
      },
      error: function(request, state, errors) {
        var message = 'Si è verificato un problema con la connessione al database';
        printMessage(message);
      }
    }
  );
}

// Funzione che stampa n volte i singoli risultati contenuti in un array passato come argomento
// Argomenti
//          ==>
//             results: indica l'array contenente tutti i risultati
// Non ha nessun return
function printList(results) {
  for (var i = 0; i < results.length; i++) {
    var singleItem = results[i];
    console.log(singleItem);
    var source = $("#itemList-template").html();
    var template = Handlebars.compile(source);
    var context = {
      text: singleItem.text,
      id: singleItem.id
    }
    var html = template(context);
    $('#toDoList').append(html);
  }
}

// Funzione che stampa gli eventuali messaggi di errore
// Non ritorna nulla
function printMessage(message) {
  var source = $("#message-template").html();
  var template = Handlebars.compile(source);
  var message = {message};
  var html = template(message);
  $('.messageWrapper').append(html);
}

// Funzione che serve a resettare la lista dei film e i messaggi di errore
// Non ritorna nulla
function reset() {
  $('.messageWrapper').html('');
  $('#toDoList').html('');
  $('#inputBar').val('');
}


function removeListItem(api, id) {
  $.ajax(
    {
      url: api + id,
      method: 'DELETE',
      success: function(dataResponse) {
        if (dataResponse.length > 0) {
          printList(dataResponse);
        } else {
          var message = 'La tua ricerca non ha prodotto risultati';
          printMessage(message);
        }
      },
      error: function(request, state, errors) {
        var message = 'Si è verificato un problema con la connessione al database';
        printMessage(message);
      }
    }
  );
}
