// Script para el portfolio personal

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Variables para el menú de navegación
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle para el menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animación de las barras del menú hamburguesa
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // Restaurar las barras del menú hamburguesa
                const bars = menuToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            }
        });
    });
    
    // Animación de scroll para secciones
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const header = document.querySelector('header');
        
        // Cambiar estilo del header al hacer scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Animación para las secciones al hacer scroll
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 300;
            if (window.scrollY >= sectionTop) {
                section.classList.add('active');
            }
        });
    });
    
    // Carousel para la galería del proyecto destacado
    const featuredImages = document.querySelectorAll('.featured-gallery img');
    const featuredMainImage = document.querySelector('.featured-main-image img');
    
    if (featuredImages.length > 0 && featuredMainImage) {
        featuredImages.forEach(image => {
            image.addEventListener('click', function() {
                // Guardar la URL actual de la imagen principal
                const currentMainSrc = featuredMainImage.src;
                
                // Cambiar la imagen principal por la seleccionada
                featuredMainImage.src = this.src;
                
                // Cambiar la imagen seleccionada por la antigua imagen principal
                this.src = currentMainSrc;
                
                // Efecto de transición
                featuredMainImage.classList.add('zoom');
                setTimeout(() => {
                    featuredMainImage.classList.remove('zoom');
                }, 300);
            });
        });
    }
    
    // Efecto de carga para la página
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Añadir clase 'active' a la primera sección para la animación inicial
        const firstSection = document.querySelector('section');
        if (firstSection) {
            firstSection.classList.add('active');
        }
    });
    
    // Formulario de contacto (si se implementa en el futuro)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica de envío del formulario
            // Por ahora, simular envío exitoso
            alert('¡Mensaje enviado con éxito!');
            contactForm.reset();
        });
    }
    
    // Añadir CSS para los efectos de animación
    const style = document.createElement('style');
    style.innerHTML = `
        .zoom {
            animation: zoom 0.3s ease-in-out;
        }
        
        @keyframes zoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        section.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        header.scrolled {
            padding: 0.7rem 0;
            background-color: rgba(44, 62, 80, 0.95);
        }
        
        .bar.active:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .bar.active:nth-child(2) {
            opacity: 0;
        }
        
        .bar.active:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});