const button = document.querySelector('.theme-switcher');

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (localStorage.getItem('Theme') === "dark-theme") {
        localStorage.setItem('Theme', "light-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "Dark Mode";

    } else {
        localStorage.setItem('Theme', "dark-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "Light Mode";
    }
});

document.documentElement.className = localStorage.getItem('Theme')

