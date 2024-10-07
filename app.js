// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const toDoTasks = document.querySelector('.to-do');
const addTaskBtn = document.querySelector('.add-task-btn');
const enterTaskText = document.querySelector('.add-task-text');

toDoTasks.addEventListener('click', function(event){
    if(event.target.tagName === 'INPUT' && event.target.getAttribute('data-action') === 'remove'){
        event.target.parentNode.remove();
    }
})

addTaskBtn.addEventListener('click', function(){
    const userTask = enterTaskText.value;

    if(userTask !== ""){
       const newTask = document.createElement('li');
       newTask.textContent = userTask;

       const removeButton = document.createElement('input');
       removeButton.classList.add("remove-button");
       removeButton.type = 'button';
       removeButton.value = 'Видалити';
       removeButton.setAttribute('data-action', 'remove');

       toDoTasks.appendChild(newTask);
       newTask.appendChild(removeButton);
       enterTaskText.value = "";
    }else{
        alert('Введи своє завдання, будь ласка!');
    }
})



