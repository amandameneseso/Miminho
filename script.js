document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Responsiva
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const navbar = document.querySelector('.navbar'); // Adiciona a classe 'active' na navbar para estilos do menu-toggle

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        navbar.classList.toggle('active'); // Ativa a classe na navbar
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Fechar menu mobile ao redimensionar (para desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) { // 767px é o breakpoint do CSS para mobile
            navList.classList.remove('active');
            navbar.classList.remove('active');
        }
    });


    // 2. Acordeão de FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fecha todos os outros itens FAQ abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Alterna a classe 'active' para o item clicado
            item.classList.toggle('active');
        });
    });

    // 3. Efeito de scroll na navbar (opcional, se quiser uma navbar que muda ao scrollar)
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         navbar.classList.add('scrolled');
    //     } else {
    //         navbar.classList.remove('scrolled');
    //     }
    // });
});