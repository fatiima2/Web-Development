function keyClick(){
    var keys = document.getElementsByClassName("key");
    let inputarea= document.getElementById("input-field");
   
    console.log(inputarea);
    console.log(keys)
    for(var i = 0; i < keys.length; i++){
        keys[i].addEventListener("click", function(){
            console.log(this.innerHTML);
            console.log(inputarea.value);
            if(this.innerHTML=="Space")
               inputarea.value+=" ";
            else if(this.innerHTML=="↵")
                inputarea.value+="\n";
            else if(this.innerHTML=="←")
                //inputarea.value=this.innerHTML.length-1;
            inputarea.value-="\b";
           
            else
                inputarea.value+=this.innerHTML;
});
    }
}

keyClick();