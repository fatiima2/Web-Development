const bulb=document.getElementById("bulb")
const button=document.getElementById("toggle")
let isOn=true
let func1 = function toggleBulb(func1)
{
    if(isOn)
    {
        bulb.setAttribute("src","c:\Users\DELL\OneDrive\Desktop\off bulb.jpg")
        bulb.setAttribute("alt","Bulb Off")
    }
    else
    {
        bulb.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHxuf-OEgPMg5E8Ja5SXmKX610qkRRqe74g&s")
        bulb.setAttribute("alt","Bulb On") 
    }
    isOn=!isOn

}
button.addEventListener('click',func1(func1))