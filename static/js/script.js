let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')
let container2 = document.querySelector('.play-container')

menuIcon.onclick =function(){
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
    container2.classList.toggle('large-play-container')

}

console.log(sidebar)