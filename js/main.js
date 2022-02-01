// dark mode 
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active'),
        body.classList.toggle('active');
};

//  burger
var modalBtn = document.querySelector('.burger');
var modal = document.querySelector('.nav-link-item');
var modalClose = document.querySelector('.close-nav');
modalBtn.addEventListener('click', function() {
    modal.classList.add('nav-link-item-active');
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('nav-link-item-active');
});


// filter 
var filterBtn = document.querySelector('.filter-btn');
var filterModal = document.querySelector('.filtr');
var filterClose = document.querySelector('.f-c');

filterBtn.addEventListener('click', function() {
    filterModal.classList.add('filtr-active');
});

filterClose.addEventListener('click', function() {
    filterModal.classList.remove('filtr-active');
});




// scroll 
const myButton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};





// loader 


var myLoader;

function myFunction() {
    myLoader = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader-wrapper").style.display = "none";
}