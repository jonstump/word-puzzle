$(document).ready(function() {
  $("#encrypt").submit(function(event) {
    event.preventDefault();
    $("#result").hide();

    const sentence = $("input#sentence").val();
    console.log(sentence)
  })
})