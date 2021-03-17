// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
$(document).ready(function() {


  $('#add').click(function(){

   // $('#lista').append(template);

    // //aggiungo alla lista clonata altre liste grazie all'input
    var testo = $('#input').val();
    // console.log(testo);
    // $('#lista').append(testo);


    //clono la lista dentro template
   var template = $('.template li').clone();

    template.children('#testo').text(testo);

    //delete
     template.children('#delete').click(function() {
      $(this).parent().remove();
      })

      template.children('#edit').click(function(){
        var prendo = $(this).siblings('#testo');
        var elemento = prendo.text();
        prendo.hide();
        $(this).siblings('#input1').val(elemento).show;
      })

     $('#lista').append(template);


  })





})
