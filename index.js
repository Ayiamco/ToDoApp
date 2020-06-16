//get task from local storage to GWHDKJFHSKJDHJ ghkwghkwegh kjhdkhj kjhkdK
window.addEventListener("load",fillData())

function fillData(){
    try{
        localStorage["tasks"].split('||')
        if (!String(localStorage.length)==0){
            console.log(String(localStorage["tasks"]))
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
    let taskHtml=`<li class='task'>${task}.<br><button class="remove" onclick="removeItem(this)"> Remove</button></li>`
    myLi.innerHTML=taskHtml
    document.querySelector('ul').appendChild(myLi)
    document.querySelector('.tooltip').style.display='none'
    document.querySelector('h3').style.display='block'
    document.querySelector('ul').style.display='block'
    document.querySelector('.removeAllTask').style.display='block'
    
        if(localStorage["tasks"]==null){
            localStorage["tasks"]=taskHtml
            console.log("added first item")
            console.log(localStorage["tasks"])
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
    let currentTaskIndex=1
    for(let index=0;index<childs.length;index++){
        if (currentTask.textContent==childs[index].textContent){
            console.log('here: ',childs[index])
            childs[index].remove()
            currentTaskIndex=index
        }
        
    }
    
    document.getElementsByClassName('task').item(currentTaskIndex).remove()

    localStorage['tasks']=document.querySelector('ul').innerHTML
}

