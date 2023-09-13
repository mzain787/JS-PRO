class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New Course Was Added by ${this.username}`);
    }
}
const chai =new Teacher ("chai","chai@teacher.com", 123)
chai.addCourse()

const masalaChai = new User("masala chai")
masalaChai.logMe()