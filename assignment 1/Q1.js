let count=0;
function buttonClick()
{
    count++;
    document.getElementById('counter').textContent=count;
}
document.getElementById('count-button').addEventListener('click',buttonClick)
