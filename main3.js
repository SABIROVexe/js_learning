let x = [1, 2, 4, 5, 6, 9];


 for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - 1; j++) {
        if (x[j] > x[j + 1]) {
               
            let temp = x[j];
            x[j] = x[j + 1];
            x[j + 1] = temp;
            }
        }
    }
console(temp);

