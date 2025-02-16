let str = prompt("Введите строку", " ");
let j = 0;
console.log(str[0]);

for(let i = 0; i < str.length; i++){

    if(str[i] == "т"){
        j++;
    }

  console.log("количество букв:" + " " + j);
}