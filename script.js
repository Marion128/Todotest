// script.js

// Variables pour chaque liste
const todayList = document.getElementById('today-list');
const weekList = document.getElementById('week-list');
const monthList = document.getElementById('month-list');

// Variables pour afficher les pages
const todayPage = document.getElementById('today');
const weekPage = document.getElementById('week');
const monthPage = document.getElementById('month');

// Boutons footer
const footerToday = document.getElementById('footer-today');
const footerWeek = document.getElementById('footer-week');
const footerMonth = document.getElementById('footer-month');

// Fonction pour ajouter une tâche
function addTask(page) {
  const taskText = prompt("Entrez la tâche :");
  if (taskText) {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        taskItem.style.textDecoration = 'line-through';
        taskItem.style.color = 'gray';
      } else {
        taskItem.style.textDecoration = 'none';
        taskItem.style.color = 'black';
      }
    });
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskText));
    page.appendChild(taskItem);
  }
}

// Afficher la page correspondante
function showPage(page) {
  todayPage.style.display = 'none';
  weekPage.style.display = 'none';
  monthPage.style.display = 'none';
  page.style.display = 'block';
}

// Ajouter des tâches
document.getElementById('add-today').addEventListener('click', () => addTask(todayList));
document.getElementById('add-week').addEventListener('click', () => addTask(weekList));
document.getElementById('add-month').addEventListener('click', () => addTask(monthList));

// Changer de page
footerToday.addEventListener('click', () => showPage(todayPage));
footerWeek.addEventListener('click', () => showPage(weekPage));
footerMonth.addEventListener('click', () => showPage(monthPage));

