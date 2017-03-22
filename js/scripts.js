$(document).ready(function() {
  $(".btn").click(function() {
    $(".container").hide();
   $(".receipt").show();
});

  $("#formOne").submit(function(event) {
    var firstInput = $("input#first").val();
    var lastInput = $("input#last").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();

    $(".first").text(firstInput);
    $(".last").text(lastInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);

    event.preventDefault();
  });
});
