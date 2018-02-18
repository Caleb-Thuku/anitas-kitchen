$(document).ready(function() {
  $(".clickable").click(function() {
    $("#chickenPizza-showing").toggle();
    $("#chickenPizza-hidden").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#prices").click(function() {
    $("ul#user").prepend("<li>How are your prices?</li>");
    $("ul#webpage").prepend("<li>Our prices are soo good that University students make orders!</li>");
  });

  $("button#delivery").click(function() {
    $("ul#user").prepend("<li>Do you have a food delivery system?</li>");
    $("ul#webpage").prepend("<li>Is the sky blue? Of course we have one. Deliveries right to your doorstep!</li>");
  });

  $("button#hiring").click(function() {
    $("ul#user").prepend("<li>Is Anitas Kitchen hiring by any chance?</li>");
    $("ul#webpage").prepend("<li>Yes,we need a new baker.</li>");
 });
 $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput= $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();

        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();

    event.preventDefault();
  });
});
