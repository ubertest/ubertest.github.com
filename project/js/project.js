jQuery(function ($) {

	// Add class "dynamicFeed" to an element and it will render the contents of
	// an RSS feed configured by attributes.
	$('.dynamicFeed').each(function () {

		var $this = $(this),
		    url = $this.attr('data-url') || null,
		    limit = +$this.attr('data-limit') || 5,
			title = $this.attr('data-title') || '',
			linkHref = $this.attr('data-linkHref') || '',
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
				limit: limit,
				linktarget: '_blank',
				ssl: ssl
			},
			function onLoad () {

				var $header = $this.find('.rssHeader a');

				$header.text(title)
				       .attr('title', title)
				       .attr('href', linkHref);
			}
		);
	});

});