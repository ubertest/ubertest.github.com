/**
 * Use this when you want to use a single cookie as a key value map.
 *
 * var myCookiemap = $.cookiemap('cookie_name');
 * myCookiemap.set('foo', 'bar');
 * myCookiemap.get('foo') // bar
 */
(function ($, _) {

	var options = {path: "/"};

	/**
	 * Fetch json encoded data from a cookie as an object using jquery cookie
	 * plugin.
	 */
	var loadData = function (name) {

		if (!$.cookie(name)) {
			return {};
		}

		return JSON.parse($.cookie(name));

	};

	/**
	 * Save an object to a cookie encoded as json.
	 */
	var saveData = function (name, data) {

		$.cookie(name, JSON.stringify(data), options);

	};

	$.cookiemap = _.memoize(function (name) {

		var data = loadData(name);

		/**
		 * Trigger an update to the cookie when the current call stack clears.
		 */
		var throttledUpdate = function () {

			_.throttle(
				_.defer(function () {
					saveData(name, data);
				}),
				0
			);

		};

		return {

			set: function (key, value) {
				data[key] = value;
				throttledUpdate();
				return this;
			},

			get: function (key) {
				return data[key];
			}

		};

	});

}(jQuery, _));