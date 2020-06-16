//get task from local storage
window.addEventListener("load",fillData())

function fillData(){
    
    try{
        console.log(localStorage)
        let taskArray=localStorage["tasks"].split('||')
        console.log(taskArray)
        for (let task of taskArray){
            let myLi=document.createElement('li')
            myLi.textContent=task
            document.querySelector('ul').appendChild(myLi)
        }
        document.querySelector('h3').style.display='block'
        document.querySelector('ul').style.display='block'
        document.querySelector('.removeAllTask').style.display='block'
    }
    catch(err){
        console.log("No previous task added")
    }
        
        
        
        }




document.querySelector('.addTask').addEventListener('click',()=>{
    let task=document.querySelector('.input').value
    let myLi=document.createElement('li')
    document.querySelector('.input').value=''
    if (!task==''){
    myLi.textContent=task
    document.querySelector('ul').appendChild(myLi)
    document.querySelector('.tooltip').style.display='none'
    document.querySelector('h3').style.display='block'
    document.querySelector('ul').style.display='block'
    document.querySelector('.removeAllTask').style.display='block'
    
        if(localStorage["tasks"]==null){
            localStorage["tasks"]=task
            console.log("added frist item")
            console.log(localStorage["tasks"])
        }
        else{
            localStorage["tasks"]=localStorage["tasks"] + "||" +task
        }

    }
    else{
        console.log('here')
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