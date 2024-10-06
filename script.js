
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
    const taskValue = taskInput.value; 
    if (taskValue !== '') {
        addTask(taskValue);  
        taskInput.value = ''; 
    }
});


function addTask(taskValue) {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskValue;

    
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm';

    
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

   
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}
