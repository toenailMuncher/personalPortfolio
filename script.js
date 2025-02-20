function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Dark / light mode
  
  const btn = document.getElementById("modeToggle");
  const btn2 = document.getElementById("modeToggle2");
  const themeIcons = document.querySelectorAll(".icon");
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    setDarkMode();
  }
  
  btn.addEventListener("click", function () {
    setTheme();
  });
  
  btn2.addEventListener("click", function () {
    setTheme();
  });
  
  function setTheme() {
    let currentTheme = document.body.getAttribute("theme");
  
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }
  
  function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
    });
  }
  
  function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
    });
  }
  
  // Typing effect with random letters
  function typeEffect(element, text, delay = 100) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i) + characters.charAt(Math.floor(Math.random() * characters.length));
        i++;
        setTimeout(type, delay);
      } else {
        element.innerHTML = text;
      }
    }
    element.innerHTML = "";
    type();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect(document.getElementById("hello-text"), "Hello, I'm");
    typeEffect(document.getElementById("name-text"), "Marcus Chuong", 150);
    typeEffect(document.getElementById("role-text"), "Fullstack Developer", 200);
  });