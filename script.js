

$(document).ready(function(){


  $("#form").validate({
        rules: {
          "name":{
            "required": true,
            "minlength": 2,
            "maxlength": 20
          },
  //
        "email":{
            "required": true,
            "maxlength": 50
            // "regex": /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})+$/
          }
        }
  })
});

//       var nom = $(".name").val();
//       var mail = $(".email").val();
//
//       var regexnom = new RegExp("^[a-zA-Z|_|-]+$");
//       var regexmail = new RegExp("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})+$");
//
//
//   $(".name").focusout(function fname(){
//
//       if (regexnom.test(nom)){
//         $("#returname").html('<p id="green">Format correct</p>');
//       }
//       else {
//         $("#returname").html('<p id="red">Format incorrect</p>');
//       }
//   });
//
// $(".email").focusout(function fmail(){
//
//       if (regexmail.test(mail)) {
//         $("#returnmail").html('<p id="green">Format correct</p>');
//       }
//       else {
//         $("#returnmail").html('<p id="red">Format incorrect</p>');
//       }
//     });
