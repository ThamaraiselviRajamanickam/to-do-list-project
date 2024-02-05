var inputRef=document.getElementById("box");
var listItem=document.getElementById("list")
function addValues(){
    if(inputRef.value===''){
        alert("you must write something")
    }
    else{
    var listAdd=document.createElement("li")
    var addIn=inputRef.value;
    listAdd.innerHTML=addIn;
    listItem.append(listAdd);
   
    let span=document.createElement("span")
    span.innerHTML="\u00d7";
    listAdd.appendChild(span); 
    }
    inputRef.value="";
    saveData();
}
listItem.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);
function saveData(){
    localStorage.setItem("addVal",listItem.innerHTML);
}

function showValues(){
    listItem.innerHTML=localStorage.getItem("addVal")
    
}
showValues();