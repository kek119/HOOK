document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            document.querySelector('h1').style.fontSize = '1.5em';

            document.querySelector('nav ul').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            document.querySelector('h1').style.fontSize = '';

            document.querySelector('nav ul').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            document.querySelector('h2').style.fontSize = '1.5em';

            document.querySelector('nav ul').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            document.querySelector('h2').style.fontSize = '';

            document.querySelector('nav ul').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            document.querySelector('h3').style.fontSize = '1.5em';

            document.querySelector('nav ul').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            document.querySelector('h3').style.fontSize = '';

            document.querySelector('nav ul').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            document.querySelector('p').style.fontSize = '1.5em';

            document.querySelector('nav ul').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            document.querySelector('p').style.fontSize = '';

            document.querySelector('nav ul').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            document.querySelector('h4').style.fontSize = '1.5em';

            document.querySelector('nav ul').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            document.querySelector('h4').style.fontSize = '';

            document.querySelector('nav ul').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});
