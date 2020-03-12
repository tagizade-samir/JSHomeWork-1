/* Для проверки работы функций, раскомментировать в местах вызова функций */

/* Условные операторы: start */

/* 1.1 task: start */

/* Условие: Если а - четное, посчитать а*б, иначе а+б */

let a = Math.floor(Math.random() * 10), b = 8; // Создаем рандомное число для а и устанавливаем значение для b

function task1(a, b){
    if(a%2 === 0){
        console.log(`The number was ${a}, the result is ${a*b}`)
    } else {
        console.log(`The number was ${a}, the result is ${a+b}`)
    }
}

// task1(a, b);

/* 1.1 task: end */



/* 1.2 task: start */

/* Условие: Определить какой четверти принадлежит точка с координатами (х,у) */

let c = 2, d = -7;

function task2 (x, y){
    if (x > 0 && y > 0) {
        console.log("The dot is in the I quarter")
    } else if (x < 0 && y > 0){
        console.log("The dot is in the II quarter")
    } else if (x < 0 && y < 0){
        console.log("The dot is in the III quarter")
    } else if (x > 0 && y < 0){
        console.log("The dot is int the IV quarter")
    } else {
        console.log("There was an error in the process")
    }
}

// task2(c,d);

/* 1.2 task: end */



/* 1.3 task: start */

/* Условие: Найти суммы только положительных из трех чисел */

let e = [6, 8, -2]

function task3 (numbers){
    let result = 0

    numbers.forEach(element => {
        if(element > 0){
            result += element
        }
    });

    console.log(`The numbers were ${numbers} so the result is ${result}`)
}

// task3(e);

/* 1.3 task: end */



/* 1.4 task: start */

/* Условие: Посчитать выражение макс(а*б*с, а+б+с)+3 */

let num1 = Math.floor(Math.random() * 10), num2 = Math.floor(Math.random() * 10), num3 = Math.floor(Math.random() * 10); //Задаем три случайных числа

function task4 (num1, num2, num3) {
    let multiply = num1 * num2 * num3, sum = num1 + num2 + num3

    console.log(`The numbers are ${num1}, ${num2}, ${num3} the result is ${multiply > sum ? "multiply" : "sum"}: ${multiply > sum ? multiply + 3 : sum + 3}`)
}

// task4(num1,num2,num3);

/* 1.4 task: end */



/* 1.5 task: start */

/* Условие: Написать программу определения оценки студента по его рейтингу, на основе следующих правил
    Рейтинг Оценка
    0-19 F
    20-39 E
    40-59 D
    60-74 C
    75-89 B
    90-100 A */

let mark = Math.floor(Math.random() * 101); // Делаем оценку рандомной

function task5 (num) {
    switch (true) {
        case num > 0 && num < 20:
            console.log(`The mark is ${num}, so the result is F`);
            break;
        case num > 20 && num < 40:
            console.log(`The mark is ${num}, so the result is E`);
            break;
        case num > 40 && num < 60:
            console.log(`The mark is ${num}, so the result is D`);
            break;
        case num > 60 && num < 75:
            console.log(`The mark is ${num}, so the result is C`);
            break;
        case num > 75 && num < 90:
            console.log(`The mark is ${num}, so the result is B`);
            break;
        case num > 90 && num <= 100:
            console.log(`The mark is ${num}, so the result is A`);
            break;    
        default:
            console.log(`There was an error in operation`)
            break;
    }
}

// task5(mark);

/* 1.5 task: end */

/* Условные операторы: end */





/* Циклы: start */

/* 2.1 task: start */

/* Условие: Найти сумму четных чисел и их количество в диапазоне от 1 до 99 */

let start = 1, end = 99; // Устанавливаем диапазон в ручную

function task6 (start, end) {
    let quantity = 0, result = 0;
    for(let i = start; i <= end; i++){
        if(i%2 === 0){
            result += i;
            quantity++
        }
    }
    console.log(`The summary of even numbers in the range from ${start} to ${end} is ${result}. There was ${quantity} numbers`)
}

// task6(start,end);

/* 2.1 task: end */



/* 2.2 task: start */

/* Условие: Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1) */

let f = Math.floor(Math.random() * 101); //Создаем рандомную цифру, которую будем проверять

function task7 (number) {
    for(let i = 2; i < number-1; i++){
        if(number%i === 0){
            console.log(`The number ${number} is complex`)
            return
        }
    }
    console.log(`The number ${number} is simple`)
}

// task7(f);

/* 2.2 task: end */



/* 2.3 task: start */

/* Условие: Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска) */

let g = 24; // Здесь вводим число

function task8 (number) { // Данная функция использует метод последовательного подбора
    let start = 2, result = 2;

    while(start++ < number){
        result = (number / result + result) / 2;
    }

    console.log(`The root for number ${number} is ${result}`)
}

// task8(g);

function task8binary (number) { // Данная функция использует метод бинарного поиска
    let iterator = 1, start = 0, end = number, result = (end + start) / 2, temp = result * result;

    while(iterator < number + 50){

        if(temp > number){
            end = result;
            result = (end + start) / 2;
            temp = result * result;
        } else if (temp < number) {
            start = result;
            result = (end + start) / 2;
            temp = result * result;
        }else if (temp === number){
            console.log(`The root for number ${number} is ${result}`)
            return
        }

        iterator++
    }

    console.log(`The root for number ${number} is ${result}`)
}

// task8binary(g);

/* 2.3 task: end */



/* 2.4 task: start */

/* Условие: Вычислить факториал числа n. n! = 1*2*…*n-1*n;! */

let h = Math.floor(Math.random() * 11); // Создаем случайное число

function task9 (number) {
    let result = 1;

    if(number === 0){
        console.log(`The factorial of number ${number} is ${result}`)
        return
    } else {
        for(let i = 1; i < number + 1; i++){
            result *= i
        }

        console.log(`The factorial of number ${number} is ${result}`)
    }
}

// task9(h);

/* 2.4 task: end */



/* 2.5 task: start */

/* Условие: Посчитать сумму цифр заданного числа */

let i = Math.floor(Math.random() * 10001); // Создаем случайное число

function task10 (x) {
    let result = 0, number = x.toString();

    for(let j = 0; j < number.length; j++){
        result += Number(number[j])
    }

    console.log(`The summary of digits in number ${number} is ${result}`)
}

// task10(i);

/* 2.5 task: end */



/* 2.6 task: start */

/* Условие: Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123,
    вывести 321 */

let k = Math.floor(Math.random() * 100001); // Создаем случайное число

function task11 (number) {
    let result = Array.from(number.toString());

    for(let i = 0, j = 1; i < result.length / 2; i++, j++){
        let temp = result[i]
        result[i] = result[result.length - j]
        result[result.length - j] = temp
    }

    console.log(`Initial number was ${number} and the result is ${result.join("")}`)
}

task11(k);

/* 2.6 task: end */

/* Циклы: end */





/* Одномерные массивы: start */

/* 3.1 task: start */

/* Условие: Найти минимальный элемент массива */

let l = [23, 6, 7, 23, 345, 22938, 7, 8, 10, 3245, 78, 5]

function task12 (array) {
    let result = array[0]

    array.forEach(element => {
        if(result > element){
            result = element
        }
    });

    console.log(`The given array was ${l}`)
    console.log(`The minimal number in given array is ${result}`)
}

// task12(l);

/* 3.1 task: end */



/* 3.2 task: start */

/* Условие: Найти максимальный элемент массива */

function task13 (array) {
    let result = array[0]

    array.forEach(element => {
        if(result < element){
            result = element
        }
    });

    console.log(`The given array was ${l}`)
    console.log(`The maximal number in given array is ${result}`)
}

// task13(l);

/* 3.2 task: end */



/* 3.3 task: start */

/* Условие: Найти индекс минимального элемента массива */

function task14 (array) {
    let temp = array[0]

    array.forEach(element => {
        if(temp > element){
            temp = element
        }
    });

    console.log(`The given array was ${l}`)
    console.log(`The index of minimal number in given array is ${array.indexOf(temp)}`)
}

// task14(l);

/* 3.3 task: end */



/* 3.4 task: start */

/* Условие: Найти индекс максимального элемента массива */

function task15 (array) {
    let temp = array[0]

    array.forEach(element => {
        if(temp < element){
            temp = element
        }
    });

    console.log(`The given array was ${l}`)
    console.log(`The index of maximal number in given array is ${array.indexOf(temp)}`)
}

// task15(l);

/* 3.4 task: end */



/* BONUS TASK: start */

/* Условие: Объединить предыдущие четыре задания в одну функцию */

let m = [23,6,7,23,345,22938,7,8,10,3245,78,5, 987, 65, 54, 5435]

function findMinMax (array) {
    let min = array[0], max = array[0];

    array.forEach(element => {
        if(min > element){
            min = element
        } else if (max < element){
            max = element
        }
    });

    console.log(`The initial array was ${m}`)
    console.log(`Max: ${max} with index ${array.indexOf(max)}. Min: ${min} with index ${array.indexOf(min)}`)
}

// findMinMax(m);

/* BONUS TASK: end */



/* 3.5 task: start */

/* Условие: Посчитать сумму элементов массива с нечетными индексами */

let n = [23,6,7,23,7,8,10,78,5, 65, 54]

function task16 (array) {
    let result = 0, i = 1;

    while (i < array.length){
        result += array[i]
        i += 2
    }

    console.log(`The summary of odd indexed numbers in given array is ${result}`)
}

// task16(n);

/* 3.5 task: end */



/* 3.6 task: start */

/* Условие: Сделать реверс массива (массив в обратном направлении) */

let o = [213, 234, 6546, 87, 3]

function task17 (array) {

    for(let i = 0, j = 1; i < array.length / 2; i++, j++){
        let temp = array[i]
        array[i] = array[array.length - j]
        array[array.length - j] = temp
    }

    console.log(`Reversed array is ${array}`)
}

// task17(o);

/* 3.6 task: end */



/* 3.7 task: start */

/* Условие: Посчитать количество нечетных элементов массива */

let p = [345, 234, 2, 56, 34, 6, 0, 1, 46, 645, 23, -3, 0, 1, 0, 2, 5]

function task18 (array) {
    let quantity = 0;

    array.forEach(element => {
        if (element === 0 || element%2 === 0){
            return
        } else if (element === 1){
            quantity++
        } else (
            quantity++
        )
    });

    console.log(`${quantity} odd elements in the given array`)
}

// task18(p);

/* 3.7 task: end */



/* 3.8 task: start */

/* Условие: Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2 */

let q = [1, 2, 3, 4, 5, 6, 7, 8, 9] // Допускается использование массива с нечетным количеством элементов

function task19 (array) {

    let leftArray = [], rightArray = [];
    if(array.length%2 === 0){
        let half = array.length / 2

        for(let i = half, j = 0; i < array.length; i++, j++){
            leftArray.push(array[i])
            rightArray.push(array[j])
        }
    } else {
        let leftHalf = (array.length / 2) - 0.5
        let rightHalf = (array.length / 2) + 0.5

        for(let i = rightHalf, j = 0; i < array.length; i++, j++){
            leftArray.push(array[i])
            rightArray.push(array[j])
        }

        leftArray.push(array[leftHalf])
    }

    console.log(`The result array is ${leftArray.concat(rightArray)}`)
}

// task19(q);

/* 3.8 task: end */



/* 3.9 task: start */

/* Условие: Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) */

let s = [9, 6, 3, -2, 8, 0]

function task20bubble (array) { // Выполняет сортировку методом пузырька

    for(let k = 0; k < array.length; k++){
        for(let i = 0, j = 1; i < array.length; i++, j++){
            if(i === array.length - k){
                continue
            }
    
            if(array[i] > array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }

    console.log(`The array was sorted using Bubble method ${array}`)
}

function task20select (array) { // Выполняет сортировку выбором

    for(let i = 0; i < array.length - 1; i++){
        let begin = i
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[begin]){
                begin = j
            }
            
        }

        let temp = array[i]
        array[i] = array[begin]
        array[begin] = temp
    }
    
    console.log(`The array was sorted using Select method ${array}`)
}

function task20insert (array) { // Выполняет сортировку вставками

    for(let i = 1; i < array.length; i++){
        let j = i - 1
        let key = array[i]
        
        while (j >= 0 && array[j] > key){
            array[j + 1] = array[j]
            j--
        }

        array[j + 1] = key
    }

    console.log(`The array was sorted using Insert method ${array}`)
}

// task20bubble(s);
// task20select(s);
// task20insert(s);

/* 3.9 task: end */

/* Одномерные массивы: end */