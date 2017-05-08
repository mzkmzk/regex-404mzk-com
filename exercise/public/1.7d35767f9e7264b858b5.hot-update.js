webpackHotUpdate(1,{

/***/ 21:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = [{
	    type: '匹配个数',
	    data: [{
	        chart: '.',
	        name: '点号1',
	        match: '匹配单个任意字符'
	    }, {
	        chart: '[...]',
	        name: '字符串',
	        match: '匹配单个列出的字符'
	    }, {
	        chart: '[^...]',
	        name: '排除型字符组',
	        match: '匹配单个未列出字符'
	    }, {
	        chart: '\\char',
	        name: '转义字符',
	        match: '若char是元字符,或转义序列时,匹配char对应的普通字符'
	    }]
	}, {
	    type: '提供计数功能点的元字符',
	    data: [{
	        chart: '?',
	        name: '问号',
	        match: '匹配多次或一次'
	    }, {
	        chart: '*',
	        name: '星号',
	        match: '匹配零次或多次'
	    }, {
	        chart: '+',
	        name: '加号',
	        match: '匹配一次或多次'
	    }, {
	        chart: '[min, max]',
	        name: '区间量词',
	        match: '至少匹配 min 次, 至多匹配 max 次'
	    }]
	}, {
	    type: '匹配位置的元字符',
	    data: [{
	        chart: '^',
	        name: '脱字符',
	        match: '匹配一行的开头位置'
	    }, {
	        chart: '*',
	        name: '星号',
	        match: '匹配零次或多次'
	    }, {
	        chart: '+',
	        name: '加号',
	        match: '匹配一次或多次'
	    }, {
	        chart: '[min, max]',
	        name: '区间量词',
	        match: '至少匹配 min 次, 至多匹配 max 次'
	    }]
	}];

/***/ })

})