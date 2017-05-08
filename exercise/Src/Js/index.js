import '../css/index.scss'
import $ from 'jquery'
import TIPS from './TIPS'
import QUESTION from './QUESTION'
import _ from 'underscore'
import Utils from './Utils'

let tips_ul_string = '',
    question_ul_string = ''

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
                    ${ element.data.map( element => {
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


$.each(QUESTION, (index, question_element) => {
    question_ul_string += `
        <h3>问题: ${ Utils.html_encode(question_element.question) }</h3>
        <h4>例子</h4>
        <ul>
            ${
                question_element.test_demo.map( test_demo_element =>{
                    return `<li>
                                输入: ${ Utils.html_encode( test_demo_element ) },
                                输出: ${ question_element.suggest.test( test_demo_element )  }
                            </li>`
                }).join(' ')
            }
        </ul>
        <h4>测试结果</h4>
        <ul class="j_test_answer_ul" 
            data-test-demo="${Utils.string_encode( question_element.test_demo )}"
            data-suggest=${ Utils.string_encode( question_element.suggest ) }
        >
           
        </ul>
        <input  type="text" class="j_test_answer_input" data-id="0">
        <button class="j_test_answer_button">开炮</button>
        <p class="j_answer_p" style="color: red; display: none">恭喜答对啦! 推荐答案是: ${ Utils.html_encode( question_element.suggest ) }</p>
    `
    console.log(question_element.suggest)
})

$('.j_question_ul').html( question_ul_string )

$('body').on('click', '.j_test_answer_button', function(event){
   
    var user_regex_test_answer = Utils.get_regex ( $(this).siblings('.j_test_answer_input').val().trim() ),
        test_demo =   Utils.string_decode( $(this).siblings('.j_test_answer_ul').attr('data-test-demo') ),
        suggest = Utils.string_decode( $(this).siblings('.j_test_answer_ul').attr('data-suggest') ),
        user_regex_is_right

    if ( ! (user_regex_test_answer instanceof RegExp)) {
        alert('正则表达式错误')
        return
    }

    $('.j_test_answer_ul').html(
            test_demo.map( test_demo_element =>{
                    return `<li>
                                输入: ${ Utils.html_encode( test_demo_element ) },
                                输出: ${ user_regex_test_answer.test( test_demo_element )  }
                            </li>`
                    })
        )
    
    user_regex_is_right = _.every( test_demo, test_demo_element => {
        return suggest.test( test_demo_element ) === user_regex_test_answer.test( test_demo_element ) 
    })

    if ( user_regex_is_right ) {
        $(this).siblings('.j_answer_p').show()
    }
    
    
})