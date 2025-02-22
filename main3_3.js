function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str; 
}


console.log(truncate("Это очень длинная строка", 20)); 
console.log(truncate("Короткая строка", 20)); 
