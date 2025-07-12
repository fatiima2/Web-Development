function backgroundColorChanger()
{
 var n=Math.random()*10
 console.log(n)
 if(n<2)
    document.body.style.backgroundColor="red"
else if(n<3)
    document.body.style.backgroundColor="yellow"
else if(n<4)
    document.body.style.backgroundColor="grey"
else if(n<5)
    document.body.style.backgroundColor="pink"
else if(n<6)
    document.body.style.backgroundColor="Turquoise"
else if(n<7)
    document.body.style.backgroundColor="purple"
else if(n<8)
    document.body.style.backgroundColor="orange"
else if(n<9)
    document.body.style.backgroundColor="pink"
else
    document.body.style.backgroundColor="green"
}
const btn=document.getElementById("color-btn")
btn.addEventListener('click',backgroundColorChanger)
