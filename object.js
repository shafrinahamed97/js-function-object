// object হল একটি variable যা অনেক মান ধারণ করতে পারে
// একটি অব্জেট একাধিক লাইনে লেখা যায়
// object এর মধ্যে প্রত্যকটা key:value জড়াকে কমা দিয়ে দিয়ে আলাদা করা হয় 

 var student = {
    id: 115, 
    name:'shakib',
     class: 9,
      marks: 98
 }

 var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage:'64gb',
    camera: '7MP '
 }

 var myComputer = {
    brand:'AUSUS',
    price: 35000,
    color: 'black',
    processor: 'i7'

 }

 
 myComputer.processor = 'i9'
 console.log(myComputer.processor);

 console.log(mobile.price);
