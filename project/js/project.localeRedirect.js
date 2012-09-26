/*
 * When a user chooses a locale
 * Then the locale is stored in a cookie
 *
 * Given a user has a locale stored in a cookie
 * When visiting a page for a different locale
 * Then the user is redirected to the stored locale
 */
jQuery(function ($) {

	var $locales = $("#locales .locale"),
		currentLocale = $locales.filter(".current").find("a").attr("data-locale"),
		cookiemap = $.cookiemap("inviqa_shared");

	if (!cookiemap.get("locale")) {
		cookiemap.set("locale", currentLocale);
	}

	if (cookiemap.get("locale") !== currentLocale) {

		$locales.find("a[data-locale=" + cookiemap.get("locale") + "]").each(function () {
			window.isRedirecting = true;
			window.location = this.href;
		});

	}

	$locales.find("a").click(function () {

		var $this = $(this);

		if ($this.attr('data-locale') !== currentLocale) {
			cookiemap.set("locale", $this.attr('data-locale'));
		}

	});

});