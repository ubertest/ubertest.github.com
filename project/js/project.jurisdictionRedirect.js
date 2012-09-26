/*
 * When a user chooses a jurisdiction
 * Then the jurisdiction is stored in a cookie
 *
 * Given a has a jurisdiction stored in a cookie
 * When visiting the home page of another jurisdiction
 * Then the user is redirected to the stored jurisdiction
 */
jQuery(function ($) {

	var $jurisdictions,
	    current,
	    cookiemap;

	if (!$('body').hasClass('homePage')) {
		return;
	}

	$jurisdictions = $("#jurisdictions .jurisdiction");
	current = $jurisdictions.filter(".current").find("a").attr("data-jurisdiction");
	cookiemap = $.cookiemap("inviqa_shared");

	if (!cookiemap.get("jurisdiction")) {
		cookiemap.set("jurisdiction", current);
	}

	if (cookiemap.get("jurisdiction") !== current) {

		$jurisdictions.find("a[data-jurisdiction=" + cookiemap.get("jurisdiction") + "]").each(function () {
			window.isRedirecting = true;
			window.location = this.href;
		});

	}

	$jurisdictions.find("a").click(function () {

		var $this = $(this);

		if ($this.attr('data-jurisdiction') !== current) {
			cookiemap.set("jurisdiction", $this.attr('data-jurisdiction'));
		}

	});

});