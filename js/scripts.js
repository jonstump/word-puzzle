$(document).ready(function() {
  $("#encrypt").submit(function(event) {
    event.preventDefault();
    $("#result").hide();

    const sentence = $("input#sentence").val();
    const splitArray = sentence.split("");
    //console.log(splitArray)

    const vowels = ["a","e","i","o","u"]
    let encryption = [];
    //console.log(sentence)

    for(let i = 0; i < splitArray.length; i++) {
      if (vowels === i) {
        i = "-";
        encryption.push(splitArray)
      }
      
    }
  })
})