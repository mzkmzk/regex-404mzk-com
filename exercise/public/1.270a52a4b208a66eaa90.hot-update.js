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

	    tips_li_string += '\n        <h1>' + element.type + '</h1>\n        <table>\n            <thead>\n                <td>\u5143\u5B57\u7B26</td>\n                <td>\u540D\u79F0</td>\n                <td>\u5339\u914D\u5BF9\u8C61</td>\n            </thead>\n            <tbody class="j_tips_tbody">\n                <tr>\n                    <td>.</td>\n                    <td>\u70B9\u53F7</td>\n                    <td>\u70B9\u53F7</td>\n                </tr>\n            </tbody>\n        </table>\n    ';
	});
	(0, _jquery2['default'])('.j_tips_tbody').html(tips_tbody_string);

	(0, _jquery2['default'])('body').on('click', '.j_test_answer_button', function (event) {
	    var user_regex_test_answer = (0, _jquery2['default'])(this).siblings('.j_test_answer_input').val().trim(),
	        user_regex_test_answer = _get_regex(user_regex_test_answer);

	    if (!(user_regex_test_answer instanceof RegExp)) {
	        alert('正则表达式错误');
	        return;
	    }

	    '<HR SIZE=14>'.replace(user_regex_test_answer, function () {
	        console.log(arguments);
	    });
	});

/***/ })

})