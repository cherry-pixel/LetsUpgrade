// Question 1--Explore and Explain various methods in Console Function

    console.clear() //Clears the console
    console.time(); // Starts a timer (can track how long an operation takes)
    console.log("Hello this is a Normal Message") // Outputs a message to the console
    console.error("Hello this is an Error Message") // Outputs an error message to the console
    console.warn("Hello this is a Warning Message") // Outputs a warning message to the console
    console.info("Hello,This is Cherry") // Outputs an informational message to the console
    console.table(["Cherry","Jam","Bread"]); // Displays tabular data as a table
    console.trace(); // Outputs a stack trace to the console
    console.timeEnd(); //Stops a timer that was previously started by console.time()

// Question 2--Explain difference between Var, Let and Const with examples

    /*  Var:
            1- Are globally scoped or function scoped
            2- Can be updated and re-declared within its scope
            3- Hoisted to the top of their scope and initialized with undefined 
            4- Can be declared without being initialized
    */

    var a=11,b=22;
    c=a+b;
    console.log({a,b,c})
    a=33,c=c-b;
    console.log({a,b,c})

    /*  Let:
            1- Are Block Scoped
            2- Can be updated but not re-declared
            3- Hoisted to the top of their scope but not initialized
            4- Can be declared without being initialized
    */

    {
        let name='Cherry',age;
        console.log(name)
        age=20;
        console.log(age)
    }
   // console.log(age) -- Throws an error cause age variable is of local scope

    /*  Const:
            1- Are Block Scoped
            2- Can neither be updated nor re-declared
            3- Hoisted to the top of their scope but not initialized
            4- Must be initialized during declaration
    */

    {
        const fruit='Watermelon';
        console.log(fruit)
        //fruit='Mango'; -- Throws an error cause constants can't be updated
    }
    //console.log(fruit) -- Throws an error cause fruit variable is of local scope

// Question 3--Write a brief intro about the available datatypes

    // JavaScript has dynamic types, this means that the same variable can be used to hold different data types

        //Number Type
            var price=99.9;
            let num=66;
        //String type
            var text="'Hello' there,"+" This is"+' a text.'
            console.log(text)
        //Boolean type
            let bool=true;
            console.log(bool)
        //Array type
            let flowers=['tulips','rose','lilly']
            console.log(flowers)
        //Object type
            var person={
                Name:'Cherry',
                Place:'Chennai',
                Gender:'Female'
            }
            console.log(person)
        //Undefined type
            var num3;
            console.log(num3)
        //Null type
            num=null
            console.log(num)


