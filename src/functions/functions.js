
export function checkEmptyObj(obj){
    for(let key in obj){
        return true
    }
    return false
}

export function toUpperCase(str) {
    str = str.toLowerCase().split(' ');
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}