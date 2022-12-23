let str='Hello World ';
let strEdit=str.split(' ').join('');
let arr=Array.from(strEdit.split(''));
console.log(arr);
let result=arr.filter(el => el===el.toUpperCase());
console.log(result.join(''));
