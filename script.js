const inputfieldtxt = document.getElementById('inputField');
const addtodobtn = document.getElementById('addTodo');
const cleartodobtn = document.getElementById('clearTodo');

const deletelist = document.getElementById('listDel');
const completedlist = document.getElementById('listDone');

addtodobtn.addEventListener('click', addtodo);
cleartodobtn.addEventListener('click', remove);


function addtodo(){
    var outputlist = document.getElementById('output');
    outputlist.style.visibility = 'visible';

    var outputstyling = document.getElementById('outputStyling');
    var newlist = document.createElement('p');
    outputstyling.appendChild(newlist);
        
    outputstyling.style.visibility = 'visible';
    newlist.innerText = inputfieldtxt.value;
    inputfieldtxt.value = '';
    ondblclick.newlist.style = 'line-through';

}

