let btn1=document.getElementById('btn1');
let btn5=document.getElementById('btn5');
let btn7=document.getElementById('btn7');
let name=document.getElementById('name');
let ten=document.getElementById('ten');
let tweleve=document.getElementById('twelve');
let bca=document.getElementById('bca');




btn1.addEventListener("click",function()
{

    window.alert("Please Fill The Contact form to contact me");
});


btn5.addEventListener("click",function()
{

    window.open('Resume.pdf');
});


btn7.addEventListener('click',function()
{
    if(name.value=="" || email.value=="")
    {
        alert("Please Enter Name and Email id");
    }
    else
    {
        alert("We will contact you soon ");
    }

    name.value="";
    email.value="";
});


bca.addEventListener("click",function()
{

    window.location.href = 'https://adamasuniversity.ac.in/';
});


ten.addEventListener("click",function()
{

    window.location.href = 'https://apsasc.edu.in/';
});

twelve.addEventListener("click",function()
{

    window.location.href = 'https://www.armyschoolasr.org.in/';
});



