$(document).ready(function () {
    // PLACEHOLDER WORKAROUND for IE
    if (!Modernizr.input.placeholder) {
        $(".jq_placeholder").attr("style", "display: block;");
    }
    // END PLACEHOLDER

});

