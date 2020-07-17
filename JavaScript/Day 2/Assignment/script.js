// Question 1- Write a javaScript Program to get input from the user and log it on the console interface
console.error('QUESTION 1 SOLUTION')
     name=prompt("Enter your name: ");
     console.log(name);

// Question 2- With Examples explain the String and Array methods
console.error('QUESTION 2 SOLUTION')
    // Array Methods
    console.warn('ARRAY METHODS')
    let fruits=["Cherry","Mango","Watermelon"]
    let veges=["Potato","Avacado","Brocolli"]
        //Concat() Method -- Is used to join two or more arrays
            let list=fruits.concat(veges)
            console.log(list)
        //CopyWithin() Method -- Copies array elements to another position in the array, overwriting the existing values 
            console.log(list.copyWithin(0,2))
        //Every() Method -- Checks if all elements in an array pass a test (provided as a function)
            let nums=[11,22,33,44,55,66];
            const cond = (nums) => {
                nums>=30 ? console.log('Yes') : console.log('No');
              }
            nums.every(cond);
        // Entries() Method -- Returns an Array Iterator object with key/value pairs
            entry=fruits.entries()
            for(i of entry) {  
                console.log(i);
            }
        //Fill() Method -- Fills all the array elements with a static value
            console.log(veges.fill('Cabbage'));
        //forEach() Method -- returns the index of the first element in an array that pass a test (provided as a function)
            console.log(nums.forEach(cond))
        //slice() Method --  Returns the selected elements in an array, as a new array object
            console.log(list.slice(1,3));
        //reverse() Method -- Reverse the order of the elements in an array
            console.log(list.reverse());
        //valueOf() Method -- The valueOf() method returns the array
            console.log(fruits.valueOf())
    // String Methods
    console.warn('STRING METHODS')
    let text='Cherry is a fruit';
            //Length() -- Returns the length of a string
                console.log(text.length);
            //IndexOf() -- Returns the index of (the position of) the first occurrence of a specified text in a string.
                console.log(text.indexOf("Cherry"));
            //Search() -- Searches a string for a specified value and returns the position of the match
                console.log(text.search('a'));
            //Slice() -- Extracts a part of a string and returns the extracted part in a new string
                console.log(text.slice(1,3));
            //Replace() -- Replaces a specified value with another value in a string
                console.log(text.replace('fruit','name'));
            //Concat() -- Joins two or more strings
                console.log(text.concat(' Hello, ',text));
            //Trim() -- Removes whitespace from both sides of a string
                console.log(text.trim());
            //CharAt() -- Returns the character at a specified index (position) in a string
                console.log(text.charAt(9));
            //Split() -- A string can be converted to an array with the split() method
                console.log(text.split(" "));
// Question 3 - Write a Javascript program to ask the user if he/she is 21+ and log the value "Can Drink" and "Cannot Drink"
console.error('QUESTION 3 SOLUTION')
     age=confirm("Are you 21+ years old ?");
     age>21 ? console.log("Can Drink") : console.log("Cannot Drink");
