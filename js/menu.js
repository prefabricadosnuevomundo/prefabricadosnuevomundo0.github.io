(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    // Abrir menú
    openButton.addEventListener('click', () => {
        window.scrollTo(0,0);
        menu.classList.add("nav__link--show");
        document.body.classList.add("no-scroll");
    });

    // Cerrar menú con ícono de cerrar
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        document.body.classList.remove("no-scroll");
    });

    // Cerrar menú al hacer clic en cualquier enlace
    const links = menu.querySelectorAll('.nav__links');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            menu.classList.remove('nav__link--show');
            document.body.classList.remove("no-scroll");
            // 👇 si estamos en detalles, salir y mostrar la sección clicada
            const detalles = document.getElementById('detalles-proyecto');
            if (detalles && !detalles.classList.contains("oculto")) {
                // Oculta detalle y muestra todo
                detalles.classList.add("oculto");
                document.querySelectorAll(".hero, #nosotros, .beneficios, #modelos, #proyectos, #contacto")
                .forEach(sec => sec.classList.remove("oculto"));

                // Espera un momento a que se muestren las secciones y hace scroll
                const targetId = link.getAttribute("href");
                if (targetId.startsWith("#")) {
                    setTimeout(() => {
                        const target = document.querySelector(targetId);
                        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 50);
                }
            }
        });
    });

})();