//Сумма элементов массива
let arr = [1,2,3,4,5,6] 

function add(arr) {
    if (arr.length == 1){ // base case
        return arr[0] 
    } 
    return arr[0] + add(arr.slice(1))  // recurse
}
//console.log(add(arr))


// Подсчёт колличества элеметнов в массиве
function count(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return 1 + count(arr.slice(1));
}
//console.log(count(arr))


//найти наибольшее число в списке
function max(arr) {
    if (arr.length == 1) { 
        return arr[0]; 
    }else if (arr[0] < arr[1]) { 
        arr.splice(0,1); 
    }else { 
        arr.splice(1,1); 
    }
    return max(arr);
}

//console.log(max(arr))