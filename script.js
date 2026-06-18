var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');

toggle.addEventListener('click', function() {
    links.classList.toggle('active');
});

// close menu when you click a link
var items = links.querySelectorAll('a');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        links.classList.remove('active');
    });
}
