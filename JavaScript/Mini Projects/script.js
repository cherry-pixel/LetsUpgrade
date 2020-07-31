// Question-1
    // Getting all the buttons
    const add=document.querySelector('#sub');
    const dlt=document.querySelector('#res');
    const str=document.querySelector('#btn');
    // Getting the list Element
    let list=document.querySelector('#list');
    // Getting the input box
    let text=document.querySelector('#ip');

    // Adding Elements to List
    add.onclick = () => {
    let item=text.value;
    let Textnode=document.createTextNode(item);
    let listElem=document.createElement('li');
    listElem.appendChild(Textnode);
    list.appendChild(listElem);
    document.forms.form.reset();
    }

    // Removing Elements from the list
    dlt.onclick = () => {
    list.removeChild(list.childNodes[0]);
    }

    // Locally storing the elements in the list
    str.onclick = () => {
    let para = document.getElementById('p');
    para.innerText += 'Check Your Console';
    console.log(list);
    }

// Question-2
    let secs=0,mins=0,hrs=0;
    let fsecs=0;fmins=0;fhrs=0;
    let ss = document.getElementById('strtstp'),time =  document.getElementById('time');
    let status="stopped",interval = null;

    setInterval(stopwatch = () =>{
        secs++;
        if(secs===60){
            secs=0;
            mins++;
        }
        if(mins===60){
            mins=0;
            hrs++;
        }
        secs<10 ? fsecs = '0' + secs.toString() : fsecs = secs ;
        mins<10 ? fmins = '0' + mins.toString() : fmins = mins;
        hrs<10 ? fhrs = '0' + hrs.toString() : fhrs = hrs;

        time.innerHTML = fhrs + ":" + fmins + ":" + fsecs;
    },1000);


    ss.onclick = () =>{

        if(status==="stopped"){
            interval = setInterval(stopwatch(),1000);

            ss.innerHTML="Stop";
            status="started";
        }
        else{
            clearInterval(interval);
            ss.innerHTML="Start";
            status="stopped";
        }
    }

    let reset = document.getElementById('reset');
    reset.onclick = () => {

        clearInterval(interval);
        secs = 0;
        mins = 0;
        hrs = 0;
        time.innerHTML = "00:00:00";
        ss.innerHTML = "Start";

    }

// Question-3
let jokes = ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem',
'There are only 10 kinds of people in this world: those who know binary and those who don’t.',
'Real programmers count from 0.',
'Why did the programmer quit his job? Because he didnt get arrays.', 
'A foo walks into a bar takes a look around and says Hello World',
'0 is false 1 is true right? 1',
'Things arent always #000000 and #FFFFFF.',
'What is the most used language in programming? Profanity',
'!False its funny because its True','You had me at Hello World',
'2b||!2b',
'Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted',
'A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand',
'How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.',
'I would love to change the world but they wont give me the source code.',
'If at first you dont succedd call it version 1.0',
'Computers make very fast very accurate mistakes',
'I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.',
'Knock Knock... Whos there? Art... Art Who? R2D2',
'Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.']

let joke=document.getElementById('joke');
joke.onclick = () => {
    var num=Math.floor(Math.random()*(20));
        document.getElementById('jk').innerHTML=jokes[num];
    }