export default [
    {
        type: '匹配个数',
        data: [
            {
                chart: '.',
                name: '点号1',
                match: '匹配单个任意字符'
            },
            {
                chart: '[...]',
                name: '字符串',
                match: '匹配单个列出的字符'
            },
            {
                chart: '[^...]',
                name: '排除型字符组',
                match: '匹配单个未列出字符'
            },
            {
                chart: '\\char',
                name: '转义字符',
                match: '若char是元字符,或转义序列时,匹配char对应的普通字符'
            } 
        ]
    },
    {
        type: '提供计数功能点的元字符',
        data: [
            {
                chart: '?',
                name: '问号',
                match: '匹配多次或一次'
            },
            {
                chart: '*',
                name: '星号',
                match: '匹配零次或多次'
            },
            {
                chart: '+',
                name: '加号',
                match: '匹配一次或多次'
            },
            {
                chart: '[min, max]',
                name: '区间量词',
                match: '至少匹配 min 次, 至多匹配 max 次'
            } 
        ]
    },
    {
        type: '匹配位置的元字符',
        data: [
            {
                chart: '^',
                name: '脱字符',
                match: '匹配一行的开头位置'
            },
            {
                chart: '$',
                name: '美元符',
                match: '匹配一行的结束位置'
            },
            {
                chart: '\\<',
                name: '单词分界符',
                match: '匹配单词开始的位置'
            },
            {
                chart: '\\>',
                name: '单词分界符',
                match: '匹配单词的结束位置'
            } 
        ]
    },
    {
        type: '其他元字符',
        data: [
            {
                chart: '|',
                name: 'alternation',
                match: '匹配任意分隔的表达式'
            },
            {
                chart: '(...)',
                name: '括号',
                match: '限定多选结构的范围, 标注量词作用的元素, 为反向引用"捕抓"文本'
            },
            {
                chart: '\\1, \\2,...',
                name: '反向引用',
                match: '匹配之前的第一、第二组括号内的字表达式匹配的文本'
            }
        ]
    },
    {
        type: '简记法',
        data: [
            {
                chart: '\\t',
                name: '制表符',
                match: ''
            },
            {
                chart: '\\n',
                name: '换行符',
                match: ''
            },
            {
                chart: '\\r',
                name: '回车符',
                match: ''
            },
            {
                chart: '\\s',
                name: '任何"空白字符"(例如空格符 制表符 纸符等)',
                match: ''
            },
            {
                chart: '\\S',
                name: '除"\\s"之外的任何字符',
                match: ''
            },
            {
                chart: '\\w',
                name: '[a-zA-Z0-9], (在"\\w+"中很有用, 可以用来匹配一个单词)',
                match: ''
            },
            {
                chart: '\\W',
                name: '[^a-zA-Z0-9]',
                match: ''
            },
            {
                chart: '\\d',
                name: '[0-9],数字',
                match: ''
            },
            {
                chart: '\\D',
                name: '[^0-9],非数字的所有字符',
                match: ''
            },

        ]
    },
    {
        type: '环视类型',
        intro: '匹配位置,但不"占用这些字符"',
        data: [
            {
                chart: '(?<=...)',
                name: '肯定逆序环视',
                match: '子表达式能够匹配左侧文本(JS不支持)'
            },
            {
                chart: '(?&lt;!...)',
                name: '否定逆序环视',
                match: '子表达式能够不能匹配左侧文本(JS不支持)'
            },
            {
                chart: '(?=...)',
                name: '肯定顺序环视',
                match: '子表达式能够匹配右侧文本'
            },
            {
                chart: '(?!...)',
                name: '否定顺序环视',
                match: '子表达式能够不能匹配右侧文本'
            }
        ]
    },
    {
        type: '名词解释',
        intro: '',
        data: [
            {
                chart: '*、+、?、{num, num}',
                name: '匹配优先量词(贪婪模式量词)',
                match: '限制作用对象的匹配次数'
            },
            {
                chart: '*?、+?、??、{num, num}?',
                name: '忽略优先量词(非贪婪模式量词)',
                match: '正则本来是匹配优先的, 尽可能匹配更多, 而忽略优先量词会匹配尽可能少的内容, 部分NFA支持'
            }
        ]
    }
    
]