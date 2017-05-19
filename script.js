

$(document).ready(function() {

  $("#form").validate({
    rules: {
      "name": {
        "required": true,
        "minlength": 2,
        "maxlength": 20
      },

      "email": {
        "required": true,
        "maxlength": 50
      }
    }
  })
//-----------------------METHOD AJAX------------------------//
  // $("#lecture").click(function(){
  //    $.ajax({
  //       url : 'list.json',
  //       type : 'get',
  //       dataType : 'json',
  //      success: function (data) {
  //      $.each( data,function(index ,d){
  //      $('#zone').append('<li><b>' + d.name + ' </b>: ' + d.city + '</li>' );
  //        });
  //      },
  //      error : function() {
  //        $('#zone').html('ERROR !!!!!!!!!!!!!!!!!!!!!');
  //      }
  //    });
  //  });

//------------------------------------------------------------------------//
  $.getJSON('list.json', function(data) {
    $.each(data, function(index, d) {


      $('#zone').append('<li><b>' + d.name + ' : </b>' + d.city + '</li>');

    });

  });

  $("#zone").hide();

  $('#lecture').click(function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(500);


  });

});
