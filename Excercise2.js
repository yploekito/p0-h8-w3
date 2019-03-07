function balikString(str){
    var out= ""
    for (var i=str.length -1; i>=0; i--){
        out = out+str[i]
    }
    return out
}
console.log(balikString("hello world!"))