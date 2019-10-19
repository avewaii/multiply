module.exports = function multiply(first, second) {
  first = first.split('').reverse(); 
  second = second.split('').reverse(); 
  let arr;

  if(first.length >= second.length) {
    arr = Array(second.length);  
    for (let i = 0; i < second.length; i++) { 
      arr[i] = [];
    }
    for (let i = 0; i <= second.length-1; i++ ) { 
      for (let j = 0; j <= first.length-1; j++) {
        arr[i].push(second[i] * first[j] + '');
      };
    };  
  } else {
    arr = Array(first.length);  

    for (let i = 0; i < first.length; i++) { 
      arr[i] = [];
    }
    for (let i = 0; i <= first.length-1; i++ ) { 
      for (let j = 0; j <= second.length-1; j++) {
        arr[i].push(first[i] * second[j] + '');
      };
    };  
  }

  for (let i = 0; i <= arr.length-1; i++) {
    for (let j = 0; j <= arr[i].length-1; j++) {
      if (Number(arr[i][j]) > 9 ) { 
        let num1 = String(arr[i][j]).charAt(0); 

        if(j == arr[i].length-1) {  
          arr[i].push(Number(num1));
          arr[i][j] = String(arr[i][j]).slice(1);  
        } else {
          arr[i][j+1] = Number(arr[i][j+1]) + Number(num1);
          arr[i][j] = (String(arr[i][j]).slice(1)); 
        }
      } else {
        continue;
      }
    };
  }; 

  for (let i = 0; i <= arr.length-1; i++) {
    let j = 0;
    if(j < i) {
      while(j < i) {
        arr[i].unshift(0);
        j++;
      };
    };
  };

 for (let i = 0; i <= arr.length-1; i++) {
  let count = arr[arr.length-1].length;
  while (arr[i].length < count) {
    arr[i].push(0);
  };
 };

  let resultArr = Array(arr[arr.length-1].length);
 
  for (let i = 0; i <= arr[arr.length-1].length-1; i++) {
    resultArr[i] = [];
  };
  
  for (let j = 0; j <= resultArr.length-1; j++) {    
      for (let i = 0; i <= arr.length-1; i++) {
        resultArr[j].push(arr[i][j]);
      };
  };

  for(let i = 0; i < resultArr.length; i++) {
    for(let j = 0; j < resultArr[i].length; j++)
    resultArr[i][j] = Number(resultArr[i][j]);
  };

  for (let i = 0; i <= resultArr.length-1; i++) {
    resultArr[i] = resultArr[i].reduce(function(a, b) {
      return a + b;
    });
  };

  for (let i = 0; i <= resultArr.length-1; i++) {
      if (Number(resultArr[i]) > 9 && Number(resultArr[i]) < 100) { 

        let firstLetters = String(resultArr[i]).charAt(0); 
        resultArr[i+1] = Number(resultArr[i+1]) + Number(firstLetters);
        resultArr[i] = String(resultArr[i]).slice(1); 
      } else if (resultArr[i] > 99) {
        let firstLetters = String(resultArr[i]).slice(0, 2); 

        resultArr[i+1] = Number(resultArr[i+1]) + Number(firstLetters);   
        resultArr[i] = String(resultArr[i]).slice(2);

      } else {
        continue;
      }
  };
  return resultArr.reverse().join('');
}

