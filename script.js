// Seleciona os elementos relevantes
const menuHamburguer = document.getElementById("menu-hamburguer");
const menuNav = document.getElementById("menu-nav");

// Adiciona um ouvinte de evento para o botão hamburguer
menuHamburguer.addEventListener("click", () => {
    // Compara se o menu está aberto ou fechado
    const isMenuOpen = menuNav.classList.contains("active");
    
    // Altera a cor do botão hamburguer de acordo com o estado do menu
    if (isMenuOpen) {
        menuHamburguer.classList.remove("active");
    } else {
        menuHamburguer.classList.add("active");
    }

    // Adiciona ou remove a classe "active" ao menu de navegação
    menuNav.classList.toggle("active");
});
