$(".clickable").click(function(){
  $(".design-hidden").slideToggle();
  $(".design-showing").slideToggle();
});

$(".clickable2").click(function(){
  $(".development-hidden").slideToggle();
  $(".development-showing").slideToggle();
});

$(".clickable3").click(function(){
  $(".management-hidden").slideToggle();
  $(".management-showing").slideToggle();
});

//mailchimp api integration


$(document).ready(function(){
  $("form#form34A").submit(function(event){
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    email;
    message;
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    // event.preventDefault('https://gmail.us3.list-manage.com/subscribe/post');
  });


});
$("input,textarea").jqBootstrapValidation({
  preventSubmit: true,
  submitError: function($form, event, errors) {
      // additional error messages or events
  },
  submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      message;
      email;
      firstName = name.split(' ').slice(0, -1).join(' ');
      }
  }
)
  $('#form34A')[0].reset();