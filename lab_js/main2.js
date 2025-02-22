document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault(); 

  let str = document.getElementById('inputText').value;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
      if ( str.charAt(i)=== "т" || str.charAt(i) === "Т") {
          j++;
      }
  }

  document.getElementById('output').innerText = 'Количество букв т: ' + j; 
});

