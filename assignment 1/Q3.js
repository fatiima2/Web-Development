function personalizedText()
{
    var name=document.getElementById("username").value
    var message="Hello " + name +"!!"
    document.getElementById("greetings").textContent=message
  
}
var button=document.getElementById("btn")
button.addEventListener('click',personalizedText)