var text = "M"
var asci = text.charCodeAt(index);
var num = text.length;
for (let i = 0; i <= num; i++) {
  var random = Math.floor(Math.random()*26+1);
  var index = i
  var balance = 26-random
  var new_asci = balance+asci
}
console.log(random)
console.log(String.fromCharCode(new_asci))
var neg = new_asci-26
if (new_asci>90){
  console.log(String.fromCharCode(neg))
}