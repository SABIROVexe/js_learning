document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let x = Number(document.getElementById('inputText1').value);
    let n = Number(document.getElementById('inputText2').value);

    function calculateSum(n, x) {
        let S = 0;
    
        for (let k = 1; k <= n; k++) {
            let a_k = Math.sqrt(x) + Math.sin((k * Math.PI) / 4);
            S += a_k;
        }
    
        return S;
    }

    let result = calculateSum(n, x);

    document.getElementById('output').innerText = result;

    });
    
    