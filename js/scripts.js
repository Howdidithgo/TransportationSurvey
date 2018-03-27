$(document).ready(function(){
  $("form#questionset1").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=work-transportaion]:checked").each(function(){
      var mode = $(this).val();
      $("#results").append(mode + "<br>");
    });
    $("#questionset1").hide();

    $("#fun-results").show();
    $("input:checkbox[name=fun-transportaion]:checked").each(function(){
      var mood = $(this).val();
      $("#fun-results").append(mood + "<br>");

    });


  });
});
