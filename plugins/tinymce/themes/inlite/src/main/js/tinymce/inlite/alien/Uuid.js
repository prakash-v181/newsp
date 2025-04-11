
define("tinymce/inlite/alien/Uuid", [
], function() {
	var count = 0;

	var seed = function () {
		var rnd = function () {
			return Math.round(Math.random() * 0xFFFFFFFF).toString(36);
		};

		return 's' + Date.now().toString(36) + rnd() + rnd() + rnd();
	};

	var uuid = function (prefix) {
		return prefix + (count++) + seed();
	};

	return {
		uuid: uuid
	};
});
