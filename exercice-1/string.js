
f
function ucFirst(str) {
    if (str.length > 0) {
        return str[0].toUpperCase() + str.substring(1);
    } else {
        return str;
    }
}
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g,
        function(letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
}

function snake_case(string){
    if (typeof string === 'string')
    {
        return string.replace(/\s/g,'_').toLowerCase();
    }
    else
    {
        return "";
    }
}


function leet(string){
    let data = "";
    if(typeof string === "string") {
        let tabCryptage = { "A" : "4", "E" : "3", "I": "1", "O": "0", "U" : "(_)", "Y" : "7"};
        for (let i = 0; i < string.length; i++){
            if(typeof tabCryptage[string[i].toUpperCase()] === 'undefined') {
                data += string[i];
            }
            else {
                data += tabCryptage[string[i].toUpperCase()];
            }
        }
    }else{
        data = null;
    }
    return data;
}
console.log(ucFirst('test'));
console.log(capitalize('super genial'));
console.log(camelCase('super genial'));
console.log(snake_case('super Genial'));
console.log(snake_case(808));
console.log(leet('leetspeak'));