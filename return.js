function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // return 15; // return এর পর যা লেখা থাকবে সেটার মান রিটান হিসেবে পাওয়া যাবে।
    // console.log(sum);
    return sum;
    
    

}
// add(25,650);
// কোন ফাংশনকে যেখান থেকে কল করা হবে সেটার বামপাশে কোন ভেরিয়াবল থাকলে ওই ফাংশন এর রিটান এর পর যা লেখা থাকবে সেটার মান হয়ে যাবে ওই ভেরিয়াবল এর মান বা value

var total = add(80,20);
// console.log('total', total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;

var singaras = bringSingara(myTaka);
console.log('Eating singaras', singaras );