const SECCIONES = ".hero, #nosotros, .beneficios, #modelos, #proyectos, #contacto";
const detalles = document.getElementById("detalles-proyecto");

// Base de datos de proyectos
const proyectos = {
  casa_1: {
    titulo: "Casa 1",
    descripcion: "Proyecto de 40m² con diseño moderno y funcional.",
    imagenPrincipal: "images/casa1.jpeg",
    galeria: ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg"]
  },
  casa_2: {
    titulo: "Casa 2",
    descripcion: "Proyecto de 50m², ideal para familias pequeñas.",
    imagenPrincipal: "images/casa2.jpeg",
    galeria: ["images/5.jpeg", "images/6.jpeg", "images/7.jpeg"]
  },
  casa_3: {
    titulo: "Casa 3",
    descripcion: "Proyecto de 60m² con acabados premium.",
    imagenPrincipal: "images/casa3.jpeg",
    galeria: ["images/8.jpeg", "images/9.jpeg"]
  },
  casa_4: {
    titulo: "Casa 4",
    descripcion: "Proyecto de 70m² con espacios amplios.",
    imagenPrincipal: "images/casa4.jpeg",
    galeria: ["images/10.jpeg", "images/11.jpeg", "images/12.jpeg"]
  },
  casa_5: {
    titulo: "Casa 5",
    descripcion: "Proyecto de 40m² con diseño moderno y funcional.",
    imagenPrincipal: "images/casa5.jpeg",
    galeria: ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg"]
  },
  casa_6: {
    titulo: "Casa 6",
    descripcion: "Proyecto de 50m², ideal para familias pequeñas.",
    imagenPrincipal: "images/casa6.jpeg",
    galeria: ["images/5.jpeg", "images/6.jpeg", "images/7.jpeg"]
  },
  casa_7: {
    titulo: "Casa 7",
    descripcion: "Proyecto de 60m² con acabados premium.",
    imagenPrincipal: "images/casa7.jpeg",
    galeria: ["images/casa7.1.jpeg", "images/casa7.2.jpeg"]
  },
  casa_8: {
    titulo: "Casa 8",
    descripcion: "Proyecto de 70m² con espacios amplios.",
    imagenPrincipal: "images/casa8.jpeg",
    galeria: ["images/10.jpeg", "images/11.jpeg", "images/12.jpeg"]
  },
  casa_9: {
    titulo: "Casa 9",
    descripcion: "Proyecto de 70m² con espacios amplios.",
    imagenPrincipal: "images/casa9.jpeg",
    galeria: ["images/10.jpeg", "images/11.jpeg", "images/12.jpeg"]
  }
};

// Mostrar detalles del proyecto
function mostrarDetalles(proyecto) {
  const data = proyectos[proyecto];
  if (!data) {
    detalles.innerHTML = "<p>No hay información disponible.</p>";
    return;
  }

  // Ocultar otras secciones
  document.querySelectorAll(SECCIONES).forEach(el => el.classList.add("oculto"));

  // Crear las diapositivas dinámicamente
  const slides = data.galeria
    .map(img => `<div class="swiper-slide"><img src="${img}" alt="${data.titulo}"></div>`)
    .join("");

  // Inyectar el contenido con el carrusel
  detalles.innerHTML = `
    <div class="detalle-container fade-in">
      <div class="detalle-imagen-principal">
        <img src="${data.imagenPrincipal}" alt="${data.titulo}">
      </div>
      <div class="detalle-texto">
        <h1>${data.titulo}</h1>
        <p>${data.descripcion}</p>
      </div>

      <!-- CARRUSEL DE IMÁGENES -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">${slides}</div>

        <!-- Controles -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- BOTÓN VOLVER -->
      <a href="#" id="volverBtn" class="boton-regresar">← Volver a Proyectos</a>
    </div>
  `;

  // Inicializamos Swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: { delay: 3000, disableOnInteraction: false }
  });

  // Mostrar la sección
  detalles.classList.remove("oculto");

  // Evento para volver
  document.getElementById("volverBtn").addEventListener("click", (e) => {
    e.preventDefault();
    volverAProyectos();
  });

  // Scroll al inicio de la sección
  detalles.scrollIntoView({ behavior: "smooth", block: "start" });
}

function volverAProyectos() {
  detalles.classList.add("oculto");
  document.querySelectorAll(SECCIONES).forEach(el => el.classList.remove("oculto"));

  const sec = document.getElementById("proyectos");
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
}
