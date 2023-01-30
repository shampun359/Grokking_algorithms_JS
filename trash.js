console.time('test-Рекурсия');

function fact(x){
  if (x == 1){
      return 1
  }else{
      return x + fact(x-1)
  }
  
}
console.log(fact(5000))

console.timeEnd('test-Рекурсия');

console.time('test');

var summation = function (num) {
  let result = 0;
   for (var i = 1; i <= num; i++) {
     result += i;
   }
  return result;
}
 
console.log(summation(5000))

console.timeEnd('test');