// Question 1
    let color=['cyan','navy']
    setInterval(clr = () => {color.forEach(ele => {
        document.body.style.backgroundColor+=ele;
    })},1000 )

// Question 2 
    const num = prompt("What Tables Do you wanna see?");
    let hd = document.getElementById('hd');

    for(i=1;i<=12;i++){
        hd.innerText += `${num} X ${i} = ${num*i}\n` 
    }

// Question 3
    // Dark Button
    const button = document.getElementById("btn");
    const body = document.getElementsByTagName("body")

    button.onclick = () => {
        // body.classList.add('dark');
        document.body.style.color='wheat';
        document.body.style.backgroundColor='Black';
        button.innerText='🌝';
    }
    // Greeting user
    const user = prompt("Enter your Name: ")
    greet.innerText=`Hello ${user} 🤩, Nice to Meet you 😊`;
    // Displaying Live Time Clock
    const time = document.getElementById('clock') 

    setInterval(timer = () => {
        let date = new Date();
        let clock = date.toLocaleTimeString();
        time.innerText = clock;
    },1000);
    //setInterval(timer,1000);
