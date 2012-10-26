/*
 * The locale dropdown is a javascript locale selector. This script clones the
 * language selector in the footer, modifies it to use bootstrap dropdown
 * markup, populates the currently selected language, and adds it to the DOM.
 *
 * This script should be loaded before bootstrap and localeRedirect.
 */
jQuery(function ($) {

	var $locales = $("#language-footer .locales").clone().addClass("dropdown-menu");
    var $view = $(
        '<div id="locale-header">' +
            '<div class="container">' +
                '<div class="dropdown pull-right">' +
                    '<button class="btn-link dropdown-toggle" data-toggle="dropdown">' +
                        '<i class="icon-globe icon-white"></i> ' +
                        '<span class="active"></span> ' +
                        '<i class="icon-chevron-down icon-white"></i>' +
                    '</button>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    var $dropdown = $view.find(".dropdown");
    $dropdown.find("span.active").text($locales.find(".active").text());
    $dropdown.append($locales);

    $view.insertAfter($("#primary-nav"));

});

