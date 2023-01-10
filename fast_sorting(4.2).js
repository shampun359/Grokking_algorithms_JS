// Быстрая сортировка массива с разделением 
let array = [9, 34, 1, 8, 19, 2, 7, 3]


function quickSort (arr) {
    if (arr.length < 2) return arr;// Пустой массив или с 1 элементом нет смысла сортировать
    let mid = arr[0]; // Выбираем опорный элемент
    let less = arr.slice(1).filter(elem => elem <= mid)// Формируем  массив из элементов < mid
    let greater = arr.slice(1).filter(elem => elem > mid) //Формируем  массив из элементов > mid
    return [...quickSort(less), mid, ...quickSort(greater)] // Объеденяем. Что бы передать все элементы за раз используется оператор spread(...)
}
  
//console.log(quickSort(array))


// Без применения стандартных функции JS, с применением цикла
function quicksort_rec(array) {
	if (array.length < 2) return array;

	let pivot = array[0];
	const left = [];
	const right = [];

	for (let i = 1; i < array.length; i++) {
		if (pivot > array[i]) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return quicksort_rec(left).concat(pivot, quicksort_rec(right));
}

console.log(quicksort_rec(array))