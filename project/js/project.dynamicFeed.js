/*
 * Add class "dynamicFeed" to an element and it will render the contents of an
 * RSS feed configured by attributes.
 */
jQuery(function ($) {

	if (window.isRedirecting) {
		return;
	}

	$('.dynamicFeed').each(function () {

		var $this = $(this),
		    url = $this.attr('data-url') || null,
		    limit = +$this.attr('data-limit') || 5,
			ssl = false;

		if (!url) {
			return;
		}

		if ($this.attr('data-ssl')) {
			ssl = true;
		}

		$this.rssfeed(
			url,
			{
                header: false,
				limit: limit,
				linktarget: '_blank',
                media: false,
				ssl: ssl,
                titletag: 'h3'
			}
		);
	});

});