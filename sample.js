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