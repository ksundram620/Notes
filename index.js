
showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let obj={
        Title:addTitle.value,
        Txt:addTxt.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    console.log(notesObj);
    showNotes();
});
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html +=` <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${element.Title}</h5>
          <p class="card-text">${element.Txt}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;

    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to Show Here add Notes first`;
    }

};


function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj)); 
    showNotes();

}

let search=document.getElementById("searchTxt");
search.addEventListener("input", function(){
    let inputVal=search.value.toLowerCase();
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
