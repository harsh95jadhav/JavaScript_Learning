console.log("=====reverse of string:-'Hard work always pays back'======");
function reversString(string) {
    var lengthstr = string.length - 1
    var reversstr = "";
    for (let index = lengthstr; index >=0; index--) {
        //console.log( string.charAt(index));
        reversstr = reversstr + string.charAt(index)
        
        
    }
    console.log(reversstr);
 
    
}
reversString("Hard work always pays back")
console.log("===========revers of string:- 'Soon i will be Angular IT champ========");
reversString("Soon i will be Angular it champ")