// let navUl = document.querySelector("ul");
// let icon = document.querySelector(".icon");
// let cancel = document.querySelector(".cancel");

// icon.addEventListener('click', function(){
//     navUl.style.display = "block";
//     icon.style.display = "none";
//     cancel.style.display = "block";
// });

// cancel.addEventListener('click', function(){
//     navUl.style.display = "none";
//     cancel.style.display = "none";
//     icon.style.display = "block";
// })

// let navUl = document.querySelector("ul");
// let icon = document.querySelector(".icon");

// icon.addEventListener('click', function(event){
//     event.preventDefault(); // Prevent the default behavior
//     navUl.style.display = "block";
// });


let navUl = document.querySelector("ul");
let icon = document.querySelector(".icon");
let cancel = document.querySelector(".cancel");

icon.addEventListener('click', function(){
    navUl.style.display = "block";
    icon.style.display = "none";
    cancel.style.display = "block";
});

cancel.addEventListener('click', function(){
    navUl.style.display = "none";
    cancel.style.display = "none";
    icon.style.display = "block";
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 780) {
        navUl.style.display = "flex";
        icon.style.display = "none";
        cancel.style.display = "none";
    } else {
        navUl.style.display = "none";
        icon.style.display = "block";
        cancel.style.display = "none";
    }
});



