let listofNumbers = [1,2,3,4,5];
let a = listofNumbers.reverse();
console.log(a);

function q(nums,k){ 
for(let i = 0; i < nums.length - 1;i++){
    for(let j = i + 1; j<nums.length;j++){
        if(nums[i]+nums[j]===k){
            return true;
        }
        }
    }
return false;
}
q([10,15,3,7],17);



var nums1 =[46,55,88,0,0,0,0];
var nums2 =[18,29,80,90];  
var nums3 = nums1.concat(nums2);
nums3.sort();
nums3.splice(0,4);
console.log(nums3);

function test(arr){
arr.forEach(function(el, i) {
if(i % 2 !==0){

}
});

}


const o = {
    test: 6,
    ololo: 'qwerty',
    name: 'John'
}

function up(obj) {
	const res = {};

  for (p in obj) {
    res[String(p).toUpperCase()] = obj[p];
  }  
	console.log(res);

}
up(o);
    