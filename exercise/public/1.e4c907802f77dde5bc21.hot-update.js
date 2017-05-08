webpackHotUpdate(1,{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(20);

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _TIPS = __webpack_require__(21);

	var _TIPS2 = _interopRequireDefault(_TIPS);

	var _QUESTION = __webpack_require__(22);

	var _QUESTION2 = _interopRequireDefault(_QUESTION);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var tips_tbody_string = '';

	_jquery2['default'].each(_TIPS2['default'], function (index, element) {

	    tips_tbody_string += '\
	         <tr>\
	            <td>' + element.chart + '</td>\
	            <td>' + element.name + '</td>\
	            <td>' + element.match + '</td>\
	        </tr>\
	    ';
	});
	(0, _jquery2['default'])('.j_tips_tbody').html(tips_tbody_string);

	(0, _jquery2['default'])('body').on('click', '.j_test_answer_button', function () {});

/***/ })

})