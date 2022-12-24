let str = "Hello World";
let abb = str
  .split(" ")
  .map((el) => el.charAt(0))
  .join("")
  .toUpperCase();
console.log(abb);
