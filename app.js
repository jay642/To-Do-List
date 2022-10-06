console.log("Hello this to do list project");
showNotes();
// If user adds a task, add it to the local storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
   
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Task ${index+1}</h5>
                      <p class="card-text">${element}</p>
                      <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Task</button>
                    </div>
                  </div>`;
    });
let notesElm=document.getElementById('notes');
if(notesObj.length !==0)
{
    notesElm.innerHTML=html;
}
else{
    notesElm.innerHTML=`Nothing to show! Use 'Add a Task' section above to add task.`
}
}

// function to delete a task
function deleteNote(index)
{
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
search=document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputval=search.value;
    let notecards=document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display='block';
        }
        else
        {
            element.style.display='none';
        }
    })
})