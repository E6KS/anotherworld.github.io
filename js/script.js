
//Filter functionality of the products
$( '.filter-btn' ).click( filterItems );
function filterItems() {
    let button = this;
    let selector = $( button ).data( 'filter' );
    $( '#products div' ).not( selector ).hide(600);
    $( selector ).show(600);
}

// Implementation Reference: https://www.w3schools.com/howto/howto_js_active_element.asp

// Get the section's element
var btnContainer = document.getElementById("filters");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("filter-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    //Will find the specific class that is active based on filter-btn active where it will remove the active class from the html
    var current = document.getElementsByClassName("filter-btn active");
    current[0].className = current[0].className.replace("active", "");

    //Will add an active class to the newly selected button
    this.className += " active";
});
}