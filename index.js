//on reload query task from localStorage
window.addEventListener("load",fillData())

function fillData(){
    try{
        localStorage["tasks"].split('||') // throws error if there are no task
        if (!String(localStorage.length)==0){
            document.querySelector('ul').innerHTML=localStorage["tasks"]
            document.querySelector('h3').style.display='block'
            document.querySelector('ul').style.display='block'
            document.querySelector('.removeAllTask').style.display='block'
           
        }  
    }
    catch(err){
        
        console.log("New User")
    }
         
}


document.querySelector('.addTask').addEventListener('click',()=>{
    let task=document.querySelector('.input').value
    let myLi=document.createElement('li')
    document.querySelector('.input').value=''
    if (!task==''){
    let taskHtml=`<li class='task'>${task}.<br><button class="remove" onclick="removeItem(this)">Remove</button></li>`
    myLi.innerHTML=taskHtml
    document.querySelector('ul').appendChild(myLi)
    document.querySelector('.tooltip').style.display='none'
    document.querySelector('h3').style.display='block'
    document.querySelector('ul').style.display='block'
    document.querySelector('.removeAllTask').style.display='block'
    
        if(localStorage["tasks"]==null){
            localStorage["tasks"]=taskHtml
            console.log("added first item")
            
            
        }
        else{
            localStorage["tasks"]=localStorage["tasks"]  +taskHtml
            console.log("Added new task")
            
        }

    }
    else{
        console.log('Empty Entry')
        document.querySelector('.tooltip').style.display='block'
    }
})

document.querySelector('.removeAllTask').addEventListener('click',() =>{
    document.querySelector('h3').style.display='none'
    document.querySelector('ul').style.display='none'
    document.querySelector('.removeAllTask').style.display='none'
    document.querySelector('ul').innerHTML=''
    localStorage.removeItem('tasks')

})



function removeItem(node){
    
    let taskHtml= localStorage["tasks"]
    
    let taskList= document.createElement('ul')
    taskList.innerHTML=taskHtml
    childs = taskList.childNodes
    let currentTask=(node.parentElement)
    let currentTaskIndex=0
    let holder=''
    for(let index=0;index<childs.length;index++){
        if (currentTask.textContent==childs[index].textContent){
            currentTaskIndex=index
        }

        else{
            holder+=`<li class='task'>${childs[index].textContent.replace('Remove','')}<br><button class="remove" onclick="removeItem(this)">Remove</button></li>` 
        }
        
    }
    //fhkhkjhjk jxkbkxhcgjgjghjghj ghjghj
    console.log("holder:",holder)
    if (holder==''){
        document.querySelector('h3').style.display='none'
        document.querySelector('ul').style.display='none'
        document.querySelector('.removeAllTask').style.display='none'
        console.log("Just removed last element.")
        console.log('last Item')
        localStorage.removeItem("tasks")
        
    }
    
    else{localStorage['tasks']=holder}
    
    console.log('currentTaskIndex: ',currentTaskIndex)
    
    document.getElementsByClassName('task').item(currentTaskIndex).setAttribute("id","active")
    let currentElement=document.getElementById(`active`)
    
    currentElement.parentNode.removeChild(currentElement);
    
    console.log(document.querySelector("ul").childElementCount)
    

    
    
}

