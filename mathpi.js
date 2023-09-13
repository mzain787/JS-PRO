// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai = {
    name: 'ginger cai',
    price : 250,
    isAvalable: true,
    orderChai : function(){
        console.log('nahi bani');
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     enumerable: false,
//     writable:false
// })

for(const [key, value] of chai){
    console.log(`${key} : ${value}`);
}