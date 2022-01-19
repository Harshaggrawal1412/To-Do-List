let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let listElement = document.querySelector('ul');
let totalTaskElement = document.querySelector('#total-task');

let tasklist = [
];
function deleteitem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = tasklist.indexOf(task);
    if(index !== -1){
        tasklist.splice(index, 1);
    }

    populatelist();
}
function populatelist(){
    listElement.innerHTML = '';
    tasklist.forEach(function(item){
        let newitem = document.createElement('li');

        // add new span for text
        let span = document.createElement('span');
        span.innerHTML = item;
        newitem.appendChild(span);

        //add delete button
        let anchorelement = document.createElement('a');
        anchorelement.classList.add('delete');
        anchorelement.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newitem.appendChild(anchorelement);

        anchorelement.addEventListener('click', (e)=> deleteitem(e));

        //add li to ul

        listElement.appendChild(newitem);

    });

    totalTaskElement.innerHTML = tasklist.length;
}


populatelist();

function doesnothavewhitespace(s){
    let stringwithoutspace = s.trim();
    return stringwithoutspace.length > 0;
}

function addTask(){
    if (inputElement.value && doesnothavewhitespace(inputElement.value) && !tasklist.includes(inputElement.value)){
        tasklist.push(inputElement.value);
        populatelist();
    }
    inputElement.value = '';
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});