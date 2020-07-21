/* 1. Write a program which does the following things:
- Takes a positive number from the user.
- Makes an array of numbers till the number given by user
- Use higher order function to filter the odd numbers
- Generate and array of the cubes of the filtered numbers */

console.error("Question 1")
user=prompt("Enter a positive number");
arr=[]
for(i=1;i<=user;i++){
    arr.push(i)
}console.log(`The Original array is ${arr}`)
fil=arr.filter(elem => elem%2!=0).map(elem => elem**3)
console.log(`The filtered array is ${fil}`)

/* 2. Create a Class User with properties as name, age & email.
He can login and logout
Create another class Moderator which has all the features of User, plus additional functionality to Add
coins and remove coins.
Create one more class Admin which has all the features of Moderator plus additional features like add a
Course and delete a particular course for a user. */

console.error("Question 2")
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    login(){console.log(`${this.name} has Logged in`)}
    logout(){console.log(`${this.name} has Logged out`)}
}

// let user1=new User("Jamuna",20,"Cherry@Gmail.com")
// user1.logout()

class Moderator extends User{
    constructor(name,age,email,coin){
        super(name,age,email);
        this.coin=coin;
    }
    addcoins(){
        this.coin++;
        console.log(`${this.name} has ${this.coin} LU Coins`)
    }
    removecoins(){
        this.coin--;
        console.log(`${this.name} has ${this.coin} LU Coins`)
    }
}

// let user1=new Moderator("Jamuna",99)
// user1.removecoins()

class Admin extends Moderator{
    constructor(name,age,email,coin,course){
        super(name,coin,age,email);
        this.course=course;
    }
    addcourse(){console.log(`${this.name} has enrolled in ${this.course} course(s)`)}
    removecourse(){
        this.course.pop();
        console.log(`${this.name} has enrolled in ${this.course} course(s)`)
    }
    viewdetails(){
        console.log(`USER DETAILS\n\nName : ${this.name}\nAge : ${this.age}\nMail : ${this.email}\nCoins : ${this.coin}\nCourses : ${this.course}`)
    }

}

let user1=new Admin('Cherry',20,'Cherry@Gmail.com',99,['Python','AI-ML','JS','Blockchain'])

let community= ()=> {
    user1.login()
    user1.addcoins()
    user1.addcourse()
    user1.removecoins()
    user1.removecourse()
    user1.viewdetails()
    user1.logout()    
}
community()

/* 3. Using promises/async await/fetch get the random todos from the json placeholder api. And log all the
completed todos to the console.
API Endpoint : https://jsonplaceholder.typicode.com/todos */

console.error("Question 3")