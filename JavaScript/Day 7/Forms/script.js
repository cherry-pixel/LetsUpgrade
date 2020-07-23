const form=document.getElementById('frm');
let head=document.getElementsByTagName('h2');
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    if(form.name.value=="" || form.mail.value=="" || form.pass.value==""){
        head.innerHtml = "Name shouldn't be empty";
    }
})
