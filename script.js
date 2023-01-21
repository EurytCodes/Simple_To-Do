const inputfieldtxt = document.getElementById('inputField');
const addtodobtn = document.getElementById('addTodo');
const cleartodobtn = document.getElementById('clearTodo');

addtodobtn.addEventListener('click', addtodo);

function addtodo(){
    var outputlist = document.getElementById('output');
    outputlist.style.visibility = 'visible';

    var outputstyling = document.getElementById('outputStyling');
    var newlist = document.createElement('p');
    newlist.classList.add('styling');
    outputstyling.appendChild(newlist);
    outputstyling.style.visibility = 'visible';
    newlist.innerText = inputfieldtxt.value;
    inputfieldtxt.value = '';

   
    newlist.addEventListener('click', function(){
        newlist.style.backgroundColor = 'green';
    })

    newlist.addEventListener('dblclick', function(){
        outputstyling.removeChild(newlist);
    })
}

cleartodobtn.addEventListener('click', function(){
    
})
