import '../css/index.scss'
import $ from 'jquery'
import TIPS from './TIPS'
import QUESTION from './QUESTION'
import _ from 'underscore'

let tips_ul_string = '',
    question_ul_string = '',
    _get_regex = regex_string => {
        try {
            return new Function('return ' + regex_string)();
        } catch (e) {
            return null;
        }
    }

$.each(TIPS, (index, element) => {
    tips_ul_string += `
        <li>
            <h1>${element.type}</h1>
            <table>
                <thead>
                    <td>元字符</td>
                    <td>名称</td>
                    <td>匹配对象</td>
                </thead>
                <tbody class="j_tips_tbody">
                    ${ element.data.map( (element) => {
                        return `<tr>
                            <td>${element.chart}</td>
                            <td>${element.name}</td>
                            <td>${element.match}</td>
                        </tr>`
                    }).join(' ')}
                   
                    
                </tbody>
            </table>
             <hr>
        </li>
       
    `
})

$('.j_tips_ul').html( tips_ul_string )


$.each(QUESTION, (index, element) => {
    question_ul_string += `
        
    `
})

$('.j_question_ul').html( question_ul_string )

$('body').on('click', '.j_test_answer_button', function(event){
    var user_regex_test_answer = $(this).siblings('.j_test_answer_input').val().trim(),
        user_regex_test_answer = _get_regex(user_regex_test_answer)
    
    if ( ! (user_regex_test_answer instanceof RegExp)) {
        alert('正则表达式错误')
        return
    }
    
   '<HR SIZE=14>'.replace(user_regex_test_answer, function(){
        console.log(arguments)
    }) 
})