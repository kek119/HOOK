document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});








document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-size-btn');
    let isReduced = false;

    button.addEventListener('click', function() {
        if (!isReduced) {

            

            document.querySelector('body').style.fontSize = '0.9em'; 
            document.body.style.transform = 'scale(0.9)'; 

            button.textContent = 'Повернути розмір елементів'; 
            isReduced = true; 
        } else {

            

            document.querySelector('body').style.fontSize = ''; 
            document.body.style.transform = ''; 

            button.textContent = 'Зменшити розмір елементів'; 
            isReduced = false; 
        }
    });
});


