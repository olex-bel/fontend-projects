(function () {
    const navigation = document.getElementById('navigation');
    const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
    
    hamburgerMenuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
})();