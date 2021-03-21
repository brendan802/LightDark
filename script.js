const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Lught Images
function imageMode(color) {
    image3.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_Progress_indicator_re_4o4n-${color}.svg`;
    image1.src = `img/undraw_Nature_fun_re_iney-${color}.svg`;
}

// function toggleDarkLightMode(isLight) {
//     nav.style.backgroundColor = isLight? 'rgb(0 0 0 / 50%)' ||'rgb(255 255 255 / 50%)' ;
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = "Dark Mode";
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark')
//     nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = "Light Mode";
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light')

// }
// Dark Mode
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark')
}

// Light Mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light')
}

//Switch Dynmamic Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    } else {
        lightMode();
    }
}