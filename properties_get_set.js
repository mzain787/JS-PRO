function User(email,password){
    this._email = email;
    this._password = password
   Object.defineProperty(this, 'email', {
    get: function(){
      return this._email.toUpperCase()
    },
    set: function(val){
       this.email=val
    }
   })
}

const chai = new User("chai@gmail.com")
console.log(chai.email);