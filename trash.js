let data = [[60, 10],[40, 15],[70, 1],[43,5]];


function openOrSenior(data){
  let x_lenght = data.length;
  let arr = [];
  for (i=0; i<x_lenght ; i++){
    let y = data.shift();
    if(y[0] >= 55 & y[1] >= 7 ){
      arr.push("Senior")
    }else{
      arr.push("Open")
    }
  }
  return arr
}


console.log(openOrSenior(data))
