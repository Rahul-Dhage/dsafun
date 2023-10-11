let myarr=[];


const popEelement=()=>{
    if(myarr.length==0){
       alert("Stack is empty");
       return;   
    }
    let stack=document.getElementById("stackrow")
    myarr.pop()
    stack.removeChild(stack.firstElementChild)

}

function addEleToStack(element){
    let newPush = document.createElement("div")
    let node = document.createTextNode(element)
    newPush.classList.add("stElement")
    newPush.appendChild(node);
    const newele=document.getElementById("stackrow");
    newele.insertBefore(newPush,newele.children[0]);
}

function addElement(){
let element=document.getElementById('pushh').value
myarr.push(element)
document.getElementById('pushh').value=0
addEleToStack(element);
console.log(element)
}
console.log(myarr)
