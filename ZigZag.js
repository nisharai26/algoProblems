var convert = function(s, numRows) {
    var result = [];
      var step = 1, index = 0;
      for(var i = 0; i < s.length; i++){
          if(result[index] === undefined){
              result[index] = '';
             // console.log(result);
          }
          result[index] += s[i];
          console.log(result);
          //console.log(result[index]);
          if(index === 0){
              step = 1;
          }else if(index === numRows - 1){
              step = -1;
          }
          index += step;
          //console.log(index)
      }
      //console.log(result.join(''))
      return result.join('');
  }
  convert("PAYPALISHIRING");