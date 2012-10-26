/*
 * Adds class logged-in to body when the appropriate betfair cookie is set.
 */
jQuery(function ($) {

    if ($.cookie("ssoid")) {
        $(window.document.body).addClass("logged-in");
    }

});