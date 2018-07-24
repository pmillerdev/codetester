/*Welcome to the javascript for the codetester page.
Most of the interactivity was created using jQuery.*/

//Function that updates the output iframe based on what is inside the text areas.
function updateOutput() {
    //Update for the html and css.
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"
    + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    //Update for the javascript.
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

//Hover function for the buttons.
$(".toggleButton").hover(function() {
//Add the highlightedButton class to the top buttons when they are hovered over.
    $(this).addClass("highlightedButton");
//Removes the highlightedButton class when the buttons are no longer hovered over.
}, function() {
    $(this).removeClass("highlightedButton");
});

//On-click function for the buttons.
$(".toggleButton").click(function() {
    //Make the button active.
    $(this).toggleClass("active");
    //Remove the highlightedButton class.
    $(this).removeClass("highlightedButton");
    //Create a variable to store the panel ID.
    var panelId = $(this).attr("id") + "Panel";
    //Select the panel ID and make the panel appear.
    $("#" + panelId).toggleClass("hidden");
    //Variable to store the number of panels activated by the user.
    var numberOfActivePanels = 4 - $('.hidden').length;
    //Define the width of each panel based on the number of active panels.
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
})

//Alter the window height, ensuring it is below the header.
$(".panel").height($(window).height() - $("#header").height() - 15);
//Alter the window width.
$(".panel").width(($(window).width() / 2) - 10);

//Run the update output function.
updateOutput();

//Update the output as users change the content of the panels.
$("textarea").on('change keyup paste', function() {
    updateOutput();
});
