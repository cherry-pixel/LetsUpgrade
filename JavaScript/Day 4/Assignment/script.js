//1. Create a for loop that iterates upto 100 while outputting "Fizz" at multiples of 3, "Buzz" at multiples of 5 and "FizzBuzz" at multiples of 3 and 5.

console.error("Question 1")
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
    console.log(`${i}-FizzBuzz`)
    else if(i%3==0)
    console.log(`${i}-Fizz`)
    else if(i%5==0)
    console.log(`${i}-Buzz`)
    else
    continue
}

//2. Destructure the following object

const student ={
    name : "Helsinki",
    age : 24,
    projects :{
        duceGame : "Tow player dice game using Javascript"
    }
}
console.error("Question 2")
let {name,age,projects:{duceGame}}=student;
console.log(`Name : ${name}\nAge : ${age}\nProjects : ${duceGame}`);

/*3. Imagine you are going out to do some grocery shopping.
So you have an array called shoppingList with all the products you want to buy.
Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it.*/

console.error("Question 3")
shoppingList=['Green Tea','Brocolli','Milk']
shoppingBasket=[...shoppingList];
shoppingBasket.push('Vegetables','Rice','Bread');
console.log(`Shopping List : ${shoppingList}\nShopping Basket : ${shoppingBasket}`)

//4. Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,Square root, Percentage.

console.error("Question 4")
let add = (n1,n2) => n1+n2
let sub = (n1,n2) => n1-n2
let mul = (n1,n2) => n1*n2
let div = (n1,n2) => n1/n2
let sqrt = (n) => Math.sqrt(n)
let perc = (n1,n2) => (n1/100)*n2

console.log("WELCOME TO JAVASCRIPT CALCULATOR!")
// ch=prompt("Enter your choice\n1.Add\n2.Sub\n3.Mul\n4.Div\n5.Sqrt\n6.Perc")
// switch(ch){
//     case 1:
//         n1,n2=prompt("Enter two numbers").split(",")
//         console.log(add(n1,n2))
//         break;
//     case 2:
//         n1,n2=prompt("Enter two numbers").split(",")
//         console.log(sub(n1,n2))
//         break;
//     case 3:
//         n1,n2=prompt("Enter two numbers").split(",")
//         console.log(mul(n1,n2))
//         break;
//     case 4:
//         n1,n2=prompt("Enter two numbers").split(",")
//         console.log(div(n1,n2))
//         break;
//     case 5:
//         n=prompt("Enter a number")
//         console.log(sqrt(n))
//         break;
//     case 6:
//         n=prompt("Enter a number")
//         console.log(perc(n))
//         break;     
//     default:
//         break;
// }
console.log(add(33,99))
console.log(sub(33,99))
console.log(mul(33,99))
console.log(div(33,99))
console.log(sqrt(99))
console.log(perc(33,99))

/*5. You are managing a sales department for your company,
you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him.*/

console.error("Question 5")
sales=prompt("Question 5-Enter your Sales")
if (sales>=0 && sales<=5000)
    console.log("Total Commission",sales*(2/100))
else if(sales>=5001 && sales<=10000)
    console.log("Total Commission",sales*(5/100))    
else if(sales>=10001 && sales<=20000)
    console.log("Total Commission",(sales*(7/100))
else if(sales>20000)
    console.log("Total Commission",(sales*(10/100))

/*6. Rewrite the function using '?' or '||'
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them
to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the
input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
handling for a non-numeric input in this task*/

console.error("Question 6")
do{ 
    user=prompt("Enter a number greater than 100")
}while(user<=100 && user!=null)
console.log(user)

/*7. An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything
except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value */
console.error("Question 7")
 let n = 10;

 nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); 
}
/*8. Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do You Agree?",
    function(){alert("You agree.")},
    function(){alert("You canceled the execution.")}
); */

let ask = (question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Question 8-Do You Agree?", () => alert("You Agree."), () => alert("You canceled the execution."))




