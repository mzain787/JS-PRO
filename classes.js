//ES6

// class User {
//     constructor(username,email,password){
//       this.username = username;
//       this.email=email;
//       this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
    
//     changeUSerName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai", "chai@gmail.com","123")


// console.log(chai.encryptPassword());
// console.log(chai.changeUSerName());




//behind the scene
function User(username,email,password){
   this.username=username;
   this.email=email;
   this.password=password;
}
User.prototype.encryptedPassword = function(){
    return `${this.password}abc` 
}
User.prototype.changeUSerName = function(){
    return `${this.username.toUpperCase()}` 
}

const tea = new User ("tea","tea@gogle.com","123")

console.log(tea.encryptedPassword());
console.log(tea.changeUSerName());
