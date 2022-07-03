let coin = [10,5,2,3,6,7];
let input = 23;
let biaya = 0.5;

let hasilCoin = coin.sort(function(a,b){return(b-a)})
let array = [];
let sisacoin = [];
let sisa = [];
let total = 0
for (let i = 0; i < hasilCoin.length; i++) {
  if (total <= input) {
    total += hasilCoin[i]
    array.push(hasilCoin[i])
    if (total > input + biaya) {
      sisacoin = total - (input + biaya * array.length)
      sisa.push(sisacoin)
    }
  } else {
    sisa.push(hasilCoin[i])
  }
}
console.log(`Coin yang diperlukan : [${array}]`);
console.log(`Biaya : ${array.length * biaya}`);
console.log(`Sisa Coin : [${sisa.sort(function(a,b){return(b-a)})}]`);
// console.log(`total (${total})`);
// console.log(`sisacoin ${sisacoin}`);