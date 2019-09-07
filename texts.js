$(document).ready(function() {
  //Count how many elements do we have with a link (("a"))
  console.log($("a").length);

  reloadLinks();

  $("#add_button")
    .removeAttr("disabled") //We can remove atributes with removeAttr
    .click(function() {
      //Pick the value with .val
      $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>'); //The .html works when adding the element to a list but deletes the rest. When adding to an existing list, we use append. The prepend method will add it to the top of the list

      $("#add_link").val(""); //Once we have pressed the button, we delete the input and we have a clean field
      reloadLinks();
    });
});

function reloadLinks() {
  //For each in every element "a"
  $("a").each(function(index) {
    // With .attr we catch the atribute inside href
    var that = $(this); // In order to not overload the requests to the DOM, we put (this) into a var called that whenever we have to use this several times in the same function
    var link = that.attr("href");

    that.attr("target", "_blank"); //Opens the links in new tabs
    that.removeAttr();

    that.text(link);
  });
}
