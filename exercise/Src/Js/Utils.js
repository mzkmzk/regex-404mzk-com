let Utils =  {
    get_regex: regex_string => {
        try {
            return new Function('return ' + regex_string)();
        } catch (e) {
            return null;
        }
    },
    html_encode: str => {
        
        if(  str instanceof RegExp){
            str = str.toString()
        }else if ( typeof str !== 'string') {
            str = JSON.stringify( str )
        
        }
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    },
    html_decode: str => {
        if ( typeof str !== 'string') str = JSON.stringify( str )
        var div = document.createElement("div");
        div.innerHTML = str;
        return div.innerHTML;
    },
    string_encode: str => {
        console.log( typeof str )
        if(  str instanceof RegExp){
            str = str.toString()
        }else if ( typeof str !== 'string') 
            str = JSON.stringify( str )
        return encodeURIComponent(str)
    },
    string_decode: str => {
        try {
            return JSON.parse( decodeURIComponent(str) )
        }catch(e){
            return decodeURIComponent(str)
        }
    },
    match_function: (_string, _regex, match_type ) => {
        _regex = Utils.get_regex(_regex)
        if ( match_type === 'test' ){
            return _regex.test(_string)
        }else if ( match_type === 'match' ){
            return  JSON.stringify( _string['match'](_regex) )
        }
    }
}

export default Utils