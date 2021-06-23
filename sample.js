const m = [
    [100,10],[50,16],[5,200],[10,25], [20,55]
];
function bankomat(availableMoney, reqestedAmount){
    const result = {};
    let counter = 0;
const sortedArray = availableMoney.sort((a,b) =>{
    return b[0] - a[0];
})
for(i = 0; i < sortedArray.length; i++){
if( sortedArray[i][0] < reqestedAmount && counter + sortedArray[i][0] <= reqestedAmount){
    counter = counter + sortedArray[i][0];
    console.log(counter);
    if(result[sortedArray[i][0]]){
      result[sortedArray[i][0]]++;
    }else{
        result[sortedArray[i][0]] = 1;
    }
    sortedArray[i][1]--;
while(reqestedAmount-counter > 0 && sortedArray[i][0] > 0){
    result[sortedArray[i][0]]++;
    sortedArray[i][1]--;
    counter = counter + sortedArray[i][0];
}
}else if(counter == reqestedAmount){
console.log('Result: ',result);
return result;
}
else{
continue;
}
}
}


// Задача 1 21.06

let arr = [1,2,3,4,5,5,5,6,6,7,7];


function test(arr){
    let result = [];
for(let elem of arr){
if(!arr.includes(elem)){
result.push(elem);
}
}
console.log(result);
return result;
}
test();



//Задача 2 21.06 'Рекурсия'
let arr = '[{}]{()}[](){[]}{[]}';

function test2(str){
    let copy = str;
    let check = copy.length;
    copy = copy.replace(/\(\)|\{\}|\[\]/gi, '');
    console.log(copy);
    if(check !== copy.length && copy.length > 1){
     test(copy);
    }else if(copy.length === 0){
        console.log(true);
      return true
    }else{
        console.log(false);
        return false
    }
}
test2();

//Функция вызывается всегда в контексте какого-либо объекта

// === - строгое сравнение с привидением типов
// == - не строгое сравнение без привидения типов


// Задача 1 23.06.2021
const movies = [{id: 1, title: 'Star wars'},{id:2, title: 'Avatar'}];
const likes = [1,3,4,6,8,9,5];

function getLiked(movies, Likes){
    let newArr = movies.filter(function (el){
        return likes.includes(el.id);
    });
    return newArr;
}


