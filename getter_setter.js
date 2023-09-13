class User {
    constructor(email,password){
       this.email=email
       this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
       this._email =value
    }
    get password(){
        return `${this._password}zain`
    }
    set password(value){
        this._password=value
    }
}

const zain = new User("zain.ai","abc")
console.log(`${zain.password} and email : ${zain.email}`);

