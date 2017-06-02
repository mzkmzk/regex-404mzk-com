export default [
    {
        question: '匹配<HR SIZE=14>',
        match_type: 'test',
        test_demo: [
            '<HR SIZE=14>',
            '<HR SIZE=13>',
            '<HR>'
        ],
        suggest: '/<HR (.+SIZE=.*[0-9]+)?.*>/'
    },
    {
        question: '匹配 "9:17 am 或者 12:30 pm"',
        match_type: 'test',
        test_demo: [
            '99:99 pm',
            '01:10 am',
            '9:17 am',
            '12:30 pm'

        ],
        suggest: '/^(1[012]|[1-9]):[0-5][0-9] (am|pm)/'
    },
    {
        question: '匹配 "9:17 am 或者 12:30 pm"',
        match_type: 'match',
        test_demo: [
            '39F',
            '01:10 am',
            '9:17 am',
            '12:30 pm'

        ],
        suggest: '/^([-+]?[0-9]+(\.[0-9]*)?)([CF])$/'
    },
    {
        question: '分隔货币显示, 小数点左边,每隔三位加一个逗号, 现需要匹配出位置',
        match_type: 'match',
        test_demo: [
            '1234567890.1234',
            '234567890.1234',
        ],
        suggest: '/(\\d)(?=(?:\\d\\d\\d)+[\.$])/g'

    }
]
/*
{
    question: '',
    test_demo: [
        '',
        ''
    ],
    suggest: '//'
},
    
*/