export default {
    get_regex: regex_string => {
        try {
            return new Function('return ' + regex_string)();
        } catch (e) {
            return null;
        }
    },
    html_encode: str => {
        
        if ( typeof str !== 'string') str = JSON.stringify( str )
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
        if ( typeof str !== 'string') 
            str = JSON.stringify( str )
        return encodeURIComponent(str)
    },
    string_decode: str => {
        return JSON.parse( decodeURIComponent(str) )
    }
}