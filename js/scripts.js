$(document).ready(function() {
  $("#encrypt").submit(function(event) {
    event.preventDefault();
    $("#result").hide();

    const sentence = $("input#sentence").val();
    const splitSent = sentence.split("");
    console.log(splitSent)

    const vowels = ["a","e","i","o","u"]
    let encryption = [];
    console.log(sentence)
  })
})