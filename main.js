// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
$(document).ready(function() {
   //clono la lista dentro template
  var template = $('.template li').clone();
  console.log(template);
  $('#lista').append(template);

  $('#add').click(function(){

    //aggiungo alla lista clonata altre liste grazie all'input
    var testo = $('#input').val('');
    console.log(testo);
    $('#lista').append(testo);
  })




//delete
$('#delete').click(function() {
  $(this).remove();
})
})
