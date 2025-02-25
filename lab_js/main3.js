//Написать программу, которая методом обмена ("пузырька") сортирует по убыванию
//введенный с клавиатуры одномерный массив.

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let str = document.getElementById('inputText').value;
    let arr = str.split('').map(Number);
    let flag;
    let n = arr.length;

function sort(){

    do{
        flag = false;
        for(let i = 0; i < n - 1; i++ ){
            if(arr[i] < arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                flag = true;
            }
        }
    }while(flag)
    return arr;
}

sort(arr);

    document.getElementById('output').innerText = "Отсортированный массив " + arr;
});