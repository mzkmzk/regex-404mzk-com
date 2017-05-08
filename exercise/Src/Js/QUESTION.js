export default [
    {
        question: '匹配<HR SIZE=14>',
        test_demo: [
            '<HR SIZE=14>'
        ],
        suggest:/<HR (.+SIZE=.*[0-9]+)?.*>/ 
    }
]