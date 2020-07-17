//1. Take a number from a user and write a function which checks whether the number is even or odd.Assign the result to a variable and log that variable in the console.
num=prompt("Enter any number of your choice")
num%2==0 ? console.log("The number entered is "+num+" and Number is Even") : console.log("The number entered is "+num+" and number is Odd");

//2. Write a program which will take the OS name and version from the user separated by a space. Then log the OS name and version on the console.
Os=prompt("Enter your OS name and Version").split(" ")
console.log("The OS name is "+Os[0]+" and the Version is "+Os[1])

//3. Write a program to take marks as input from the user and grade them accordingly.
mark=prompt("Enter your Mark:")
if(mark>85 && mark<=100)
grade='A';
else if(mark>65 && mark<=85)
grade='B'
else if(mark>45 && mark<=65)
grade='C'
else if(mark<=45)
grade='F'
console.log("Marks are "+mark+" and grade is "+grade)