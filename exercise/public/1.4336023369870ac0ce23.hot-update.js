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

	var _underscore = __webpack_require__(15);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var tips_ul_string = '',
	    _get_regex = function _get_regex(regex_string) {
	    try {
	        return new Function('return ' + regex_string)();
	    } catch (e) {
	        return null;
	    }
	};

	_jquery2['default'].each(_TIPS2['default'], function (index, element) {

	    tips_ul_string += '\n        <h1>' + element.type + '</h1>\n        <table>\n            <thead>\n                <td>\u5143\u5B57\u7B26</td>\n                <td>\u540D\u79F0</td>\n                <td>\u5339\u914D\u5BF9\u8C61</td>\n            </thead>\n            <tbody class="j_tips_tbody">\n                ' + _underscore2['default'].map(element.data, function (element) {
	        '<tr>\n                        <td>' + data_one.chart + '</td>\n                        <td>' + data_one.name + '</td>\n                        <td>' + data_one.match + '</td>\n                    </tr>';
	    }) + '\n               \n                \n            </tbody>\n        </table>\n    ';
	});
	(0, _jquery2['default'])('.j_tips_ul').html(tips_ul_string);

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