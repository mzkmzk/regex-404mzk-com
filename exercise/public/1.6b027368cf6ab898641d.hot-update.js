webpackHotUpdate(1,{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(21);

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _TIPS = __webpack_require__(5);

	var _TIPS2 = _interopRequireDefault(_TIPS);

	var _QUESTION = __webpack_require__(22);

	var _QUESTION2 = _interopRequireDefault(_QUESTION);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var tips_tbody_string = '',
	    _get_regex = function _get_regex(regex_string) {
	    try {
	        return new Function('return ' + regex_string)();
	    } catch (e) {
	        return null;
	    }
	};

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

	(0, _jquery2['default'])('body').on('click', '.j_test_answer_button', function (event) {
	    var user_regex_test_answer = (0, _jquery2['default'])(this).siblings('.j_test_answer_input').val(),
	        user_regex_test_answer = _get_regex(user_regex_test_answer);

	    if (!(user_regex_test_answer instanceof RegExp)) {
	        alert('正则表达式错误');
	        return;
	    }

	    '<HR >'.replace(user_regex_test_answer, function () {
	        console.log(arguments);
	    });
	});

/***/ })

})