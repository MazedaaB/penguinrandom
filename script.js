document.addEventListener('DOMContentLoaded', function() {
    const book1 = document.getElementById('book1');
    const book2 = document.getElementById('book2');
    const book3 = document.getElementById('book3');
    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');
    const popup3 = document.getElementById('popup3');
    const closeButtons = document.querySelectorAll('.popup-content .close');

    book1.addEventListener('click', function() {
        popup1.style.display = 'flex';
    });

    book2.addEventListener('click', function() {
        popup2.style.display = 'flex';
    });

    book3.addEventListener('click', function() {
        popup3.style.display = 'flex';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });
});
