// Objeto con la información de los productos.
// Se organiza por categoría (sacos, chompas, etc.) y cada categoría es un array de productos.
const productos = {
    // Array para los productos de la categoría 'sacos'.
    Camisetas: [{
        nombre: "Molde de Camiseta - Modelo A",
        // Array de URLs de imágenes para el producto, incluyendo miniaturas.
        img: ["img/chompa.jpg", "img/vestido.jpg"],
        desc: "Descripción detallada del Modelo A, con sus características principales y un estilo funcional.",
        // URL del video de YouTube que muestra la confección.
        video: "https://youtu.be/dlGSlN5rvR0",
        // Objeto con la configuración para el botón de pago (ej. PayPal).
        pago: {
            action: "https://www.paypal.com/ncp/payment/ZWESEN2AYW4P8", // URL del formulario de pago.
            item_name: "Camiseta Básica, con corbatín - Modelo A", // Nombre del producto para el pago.
            amount: "4.75" // Precio del producto.
        }
    }/*, {
    nombre: "Molde de Sacos - Modelo B",
    img: ["img/sacos_modelo_b_1.jpg", "img/sacos_modelo_b_2.jpg"],
    desc: "Descripción detallada del Modelo B...",
    video: "...",
    pago: {
        action: "#",
        item_name: "Molde de Sacos - Modelo B",
        amount: "6.50"
    }
}, {
    nombre: "Molde de Sacos - Modelo C",
    img: ["img/sacos_modelo_c_1.jpg"],
    desc: "Descripción detallada del Modelo C...",
    video: "...",
    pago: {
        action: "#",
        item_name: "Molde de Sacos - Modelo C",
        amount: "7.00"
    }
} */],
    // Array para los productos de la categoría 'chompas'.
    chompas: [{
        nombre: "Molde de Chompas - Modelo 1",
        img: ["img/chompas.jpg"],
        desc: "Un suéter de lana con cuello alto para mantener a tu mascota abrigada.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chompas - Modelo 1",
            amount: "5.00"
        }
    }, {
        nombre: "Molde de Chompas - Modelo 2",
        img: ["img/chompas.jpg"],
        desc: "Chompa de diseño moderno con un patrón de rayas, muy cómoda y suave.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chompas - Modelo 2",
            amount: "5.50"
        }
    }, {
        nombre: "Molde de Chompas - Modelo 3",
        img: ["img/chompas.jpg"],
        desc: "Modelo sencillo y práctico, ideal para cualquier raza de perro pequeño.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chompas - Modelo 3",
            amount: "6.00"
        }
    }],
    // Array para los productos de la categoría 'vestidos'.
    vestidos: [{
        nombre: "Molde de Vestidos - Modelo 1",
        img: ["img/vestidos.jpg"],
        desc: "Vestido elegante con falda de tul para ocasiones especiales.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Vestidos - Modelo 1",
            amount: "6.00"
        }
    }, {
        nombre: "Molde de Vestidos - Modelo 2",
        img: ["img/vestidos.jpg"],
        desc: "Diseño veraniego con estampado floral y lazo decorativo en la espalda.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Vestidos - Modelo 2",
            amount: "6.50"
        }
    }, {
        nombre: "Molde de Vestidos - Modelo 3",
        img: ["img/vestidos.jpg"],
        desc: "Vestido de fiesta con detalles de lentejuelas y volantes en la falda.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Vestidos - Modelo 3",
            amount: "7.00"
        }
    }],
    // Array para los productos de la categoría 'camisetas'.
    camisetas: [{
        nombre: "Molde de Camisetas - Modelo 1",
        img: ["img/camisetas.jpg"],
        desc: "Camiseta de algodón con diseño básico y cuello redondo.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Camisetas - Modelo 1",
            amount: "4.00"
        }
    }, {
        nombre: "Molde de Camisetas - Modelo 2",
        img: ["img/camisetas.jpg"],
        desc: "Camiseta sin mangas con estampado divertido para un look casual.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Camisetas - Modelo 2",
            amount: "4.50"
        }
    }, {
        nombre: "Molde de Camisetas - Modelo 3",
        img: ["img/camisetas.jpg"],
        desc: "Camiseta deportiva con tela transpirable para paseos y juegos.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Camisetas - Modelo 3",
            amount: "5.00"
        }
    }],
    // Array para los productos de la categoría 'gorros'.
    gorros: [{
        nombre: "Molde de Gorros - Modelo 1",
        img: ["img/gorra.jpg"],
        desc: "Gorro tejido con orejeras para proteger del frío y el viento.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Gorros - Modelo 1",
            amount: "3.00"
        }
    }, {
        nombre: "Molde de Gorros - Modelo 2",
        img: ["img/gorra.jpg"],
        desc: "Gorro de estilo beisbolista, ideal para proteger del sol.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Gorros - Modelo 2",
            amount: "3.50"
        }
    }, {
        nombre: "Molde de Gorros - Modelo 3",
        img: ["img/gorra.jpg"],
        desc: "Gorro con diseño de animal, perfecto para un look divertido.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Gorros - Modelo 3",
            amount: "4.00"
        }
    }],
    // Array para los productos de la categoría 'disfraces'.
    disfraces: [{
        nombre: "Molde de Disfraces - Modelo 1",
        img: ["img/disfraces.jpg"],
        desc: "Disfraz de superhéroe para que tu mascota salve el día.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Disfraces - Modelo 1",
            amount: "8.00"
        }
    }, {
        nombre: "Molde de Disfraces - Modelo 2",
        img: ["img/disfraces.jpg"],
        desc: "Disfraz de calabaza para celebrar Halloween con mucho estilo.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Disfraces - Modelo 2",
            amount: "8.50"
        }
    }, {
        nombre: "Molde de Disfraces - Modelo 3",
        img: ["img/disfraces.jpg"],
        desc: "Disfraz de pirata con sombrero y chaleco para una aventura en alta mar.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Disfraces - Modelo 3",
            amount: "9.00"
        }
    }],
    // Array para los productos de la categoría 'ponchos'.
    ponchos: [{
        nombre: "Molde de Ponchos - Modelo 1",
        img: ["img/ponchos.jpg"],
        desc: "Poncho con capucha y flecos, ideal para el frío.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Ponchos - Modelo 1",
            amount: "5.50"
        }
    }, {
        nombre: "Molde de Ponchos - Modelo 2",
        img: ["img/ponchos.jpg"],
        desc: "Poncho de lana con un diseño colorido y tradicional.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Ponchos - Modelo 2",
            amount: "6.00"
        }
    }, {
        nombre: "Molde de Ponchos - Modelo 3",
        img: ["img/ponchos.jpg"],
        desc: "Poncho impermeable para los días de lluvia, práctico y fácil de poner.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Ponchos - Modelo 3",
            amount: "6.50"
        }
    }],
    // Array para los productos de la categoría 'trajes'.
    trajes: [{
        nombre: "Molde de Trajes - Modelo 1",
        img: ["img/trajes.jpg"],
        desc: "Traje de smoking con pajarita, perfecto para eventos formales.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Trajes - Modelo 1",
            amount: "9.00"
        }
    }, {
        nombre: "Molde de Trajes - Modelo 2",
        img: ["img/trajes.jpg"],
        desc: "Traje de marinero con gorrito, ideal para un look náutico.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Trajes - Modelo 2",
            amount: "9.50"
        }
    }, {
        nombre: "Molde de Trajes - Modelo 3",
        img: ["img/trajes.jpg"],
        desc: "Traje de boda para mascotas, con detalles elegantes y sofisticados.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Trajes - Modelo 3",
            amount: "10.00"
        }
    }],
    // Array para los productos de la categoría 'enterizos'.
    enterizos: [{
        nombre: "Molde de Enterizos - Modelo 1",
        img: ["img/enterizos.jpg"],
        desc: "Enterizo de algodón con diseño de pijama, muy suave y cómodo.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Enterizos - Modelo 1",
            amount: "7.00"
        }
    }, {
        nombre: "Molde de Enterizos - Modelo 2",
        img: ["img/enterizos.jpg"],
        desc: "Enterizo de invierno con forro polar, para proteger del frío extremo.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Enterizos - Modelo 2",
            amount: "8.00"
        }
    }, {
        nombre: "Molde de Enterizos - Modelo 3",
        img: ["img/enterizos.jpg"],
        desc: "Enterizo impermeable para días de lluvia y barro, fácil de limpiar.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Enterizos - Modelo 3",
            amount: "8.50"
        }
    }],
    // Array para los productos de la categoría 'chalecos'.
    chalecos: [{
        nombre: "Molde de Chalecos - Modelo 1",
        img: ["img/chalecos.jpg"],
        desc: "Chaleco de tela vaquera con forro de borrego, ideal para el otoño.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chalecos - Modelo 1",
            amount: "5.50"
        }
    }, {
        nombre: "Molde de Chalecos - Modelo 2",
        img: ["img/chalecos.jpg"],
        desc: "Chaleco reflectante para paseos nocturnos, con cierre de velcro.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chalecos - Modelo 2",
            amount: "6.00"
        }
    }, {
        nombre: "Molde de Chalecos - Modelo 3",
        img: ["img/chalecos.jpg"],
        desc: "Chaleco de lana con un diseño de cuadros, muy clásico y abrigado.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Chalecos - Modelo 3",
            amount: "6.50"
        }
    }],
    // Array para los productos de la categoría 'abrigos'.
    abrigos: [{
        nombre: "Molde de Abrigos - Modelo 1",
        img: ["img/abrigos.jpg"],
        desc: "Abrigo de invierno con cuello de piel y forro interior, para días muy fríos.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Abrigos - Modelo 1",
            amount: "8.00"
        }
    }, {
        nombre: "Molde de Abrigos - Modelo 2",
        img: ["img/abrigos.jpg"],
        desc: "Abrigo impermeable con capucha y cinturón, para días de lluvia y viento.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Abrigos - Modelo 2",
            amount: "8.50"
        }
    }, {
        nombre: "Molde de Abrigos - Modelo 3",
        img: ["img/abrigos.jpg"],
        desc: "Abrigo estilo capa con botones y detalles dorados, muy elegante.",
        video: "#",
        pago: {
            action: "#",
            item_name: "Molde de Abrigos - Modelo 3",
            amount: "9.00"
        }
    }]
};

// =======================================================
// Funciones para la navegación y visualización
// =======================================================

// Función que muestra los modelos de un producto específico (ej. los 3 sacos).
function mostrarTipos(productoId) {
    // Oculta la galería principal de moldes.
    document.getElementById('moldes').style.display = 'none';
    const infoContainer = document.getElementById('infoContainer');
    // Si existe el contenedor de información (ej. "Sobre Nosotros"), lo oculta.
    if (infoContainer) {
        infoContainer.style.display = 'none';
    }

    // Obtiene el array de productos de la categoría seleccionada (ej. productos.sacos).
    const tipos = productos[productoId];
    // Referencia al contenedor donde se mostrarán los detalles de los productos.
    const detalleContenedor = document.getElementById('detalleProducto');

    // Maneja el caso de que no haya productos en la categoría.
    if (!tipos || tipos.length === 0) {
        detalleContenedor.innerHTML = '<p style="text-align:center; padding: 50px;">No hay productos disponibles para esta categoría.</p>';
        detalleContenedor.classList.add('mostrar-detalle');
        return;
    }

    let htmlContent = '';

    // Itera sobre cada producto en la categoría para crear el HTML dinámicamente.
    tipos.forEach((prod, index) => {
        htmlContent += `
            <div class="modal-ficha-producto">
                <div class="modal-ficha-izq">
                    <img id="detalleImg-${productoId}-${index}" src="${prod.img[0]}" alt="${prod.nombre}" class="modal-img-principal">
                    <div id="detalleMiniaturas-${productoId}-${index}" class="modal-miniaturas">
                        ${prod.img.map(imgSrc => `<img src="${imgSrc}" alt="Miniatura" class="modal-miniatura" onclick="cambiarImagenDetalle('detalleImg-${productoId}-${index}', '${imgSrc}');">`).join('')}
                        <img src="img/tabla_tallas.jpg" alt="Tabla de tallas y medidas" class="modal-miniatura" onclick="cambiarImagenDetalle('detalleImg-${productoId}-${index}', 'img/tabla_tallas.jpg');">
                    </div>
                </div>
                <div class="modal-ficha-der">
                    <h2 id="detalleNombre-${productoId}-${index}">${prod.nombre}</h2>
                    <div id="detallePrecio-${productoId}-${index}" class="modal-precio">$${parseFloat(prod.pago.amount).toFixed(2)}</div>
                    <div class="modal-tallas-texto">Tallas:</div>
                    <div class="modal-tallas-lista">XXXS - XXS - S - M - L - XL - XXL - XXXL - XXXXL</div>
                    <p class="titulo-pagos">Pagar con:</p>
                    <a href="${prod.pago.action}?business=push.love.uio@gmail.com&item_name=${encodeURIComponent(prod.pago.item_name + ' - Todas las tallas')}&amount=${parseFloat(prod.pago.amount).toFixed(2)}&currency_code=USD&no_shipping=1&bn=PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" 
                       target="_blank" 
                       class="modal-paypal-btn">
                        <img src="img/logo_paypal.png" alt="PayPal" class="modal-paypal-logo">
                    </a>

                    <!-- BOTÓN TRANSFERENCIA AÑADIDO: despliega info justo debajo -->
                    <button id="transferBtn-${productoId}-${index}" class="modal-transferencia-btn" type="button" onclick="toggleTransferenciaInfo('${productoId}', ${index})">
                        Transferencia Banco Pichincha Ecuador
                    </button>

                    <div id="transferInfo-${productoId}-${index}" class="transferencia-info" style="display:none;">
                        <p><strong>Nombre:</strong> Lourdes Esmeraldas González Medina</p>
                        <p><strong>Número de cédula:</strong> 0801047556</p>
                        <p><strong>Cuenta ahorro:</strong> 2205710105</p>
                        <p><strong>Correo:</strong> nativa.push@gmail.com</p>
                        <p><strong>Compartir comprobante y modelo de prenda al WhatsApp:</strong> 0964165506</p>
                        <a href="https://api.whatsapp.com/send?phone=593964165506&text=${encodeURIComponent('Hola, envío comprobante y el modelo que deseo.')}" target="_blank" rel="noopener noreferrer">Enviar WhatsApp</a>
                    </div>
                    <!-- FIN BOTÓN TRANSFERENCIA -->
                    <p class="titulo-video">Video de confección:</p>
                    <a id="detalleVideo-${productoId}-${index}" href="${prod.video}" target="_blank" class="modal-video">Ver confección</a>
                    <p id="detalleDesc-${productoId}-${index}" class="modal-desc">${prod.desc}</p>
                </div>
            </div>
        `;
    });

    // Inserta el HTML generado en el contenedor de detalles.
    detalleContenedor.innerHTML = `
        <button onclick="atrasDetalle()" class="volver-boton">Atrás</button>
        <div id="detalleProducto-grid-container">
            ${htmlContent}
        </div>
    `;

    // Nota: llamada opcional a una función de parche si existiera en tu archivo original.
    // Si prefieres no usar esto, está bien: la lógica del botón ya está incluida.
    // if (typeof addTransferButtons === 'function') addTransferButtons(productoId);

    // Desplaza la vista hacia el nuevo contenido.
    detalleContenedor.scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para cambiar la imagen principal al hacer clic en una miniatura.
function cambiarImagenDetalle(imgId, imgSrc) {
    document.getElementById(imgId).src = imgSrc;
}

// Función para volver a la galería principal de productos.
function atrasDetalle() {
    const detalleContenedor = document.getElementById('detalleProducto');
    // Limpia el contenido de los detalles.
    detalleContenedor.innerHTML = '';

    const galeria = document.getElementById('moldes');
    // Muestra de nuevo la galería principal.
    if (galeria) {
        galeria.style.display = 'flex';
        // Desplaza la vista hacia la galería.
        galeria.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Función para mostrar la galería principal de moldes.
function mostrarTodosMoldes() {
    const info = document.getElementById('infoContainer');
    if (info) info.style.display = 'none'; // Oculta el contenedor de información.
    const detalleContenedor = document.getElementById('detalleProducto');
    if (detalleContenedor) {
        detalleContenedor.innerHTML = ''; // Limpia el contenedor de detalles.
    }
    const galeria = document.getElementById('moldes');
    if (galeria) galeria.style.display = 'flex'; // Muestra la galería de moldes.
    galeria.scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para mostrar la sección "Sobre Nosotros".
function mostrarSobreNosotros() {
    const detalleContenedor = document.getElementById('detalleProducto');
    if (detalleContenedor) detalleContenedor.innerHTML = ''; // Limpia detalles.

    const gal = document.querySelector('.productos');
    if (gal) gal.style.display = 'none'; // Oculta la galería de productos.
    const info = document.getElementById('infoContainer');
    info.innerHTML = `
        <h2 style="font-size:2rem; margin-bottom:12px;">Sobre Nosotros</h2>
        <p style="font-size:1.05rem; line-height:1.6; color:#333;">
            Somos una empresa dedicada a la confección y diseño de moldes para prendas de vestir de mascotas.
            Nuestro objetivo es ofrecer moldes claros y fáciles de seguir, acompañados de guías y videos
            instructivos para que puedas confeccionar prendas con excelentes resultados.
        </p>
        <p style="margin-top:12px; color:#555;">
            Trabajamos con materiales de calidad y realizamos pruebas de talles para asegurar el mejor ajuste.
            Si deseas, puedes ver nuestros moldes en la galería o contactarnos para compras y dudas.
        </p>
    `;
    info.style.display = 'block'; // Muestra el contenedor de información.
    info.scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para mostrar la tabla de medidas.
function mostrarTablaMedidas() {
    const detalleContenedor = document.getElementById('detalleProducto');
    if (detalleContenedor) detalleContenedor.innerHTML = ''; // Limpia detalles.

    const gal = document.querySelector('.productos');
    if (gal) gal.style.display = 'none'; // Oculta la galería de productos.
    const info = document.getElementById('infoContainer');
    info.innerHTML = `
        <h2 style="font-size:2rem; margin-bottom:12px;">Tabla de Medidas</h2>
        <p style="color:#555; margin-bottom:10px;">Haz clic en la imagen para ampliarla (si tu navegador soporta abrirla en nueva pestaña).</p>
        <a href="img/tabla_tallas.jpg" target="_blank" rel="noopener">
            <img src="img/tabla_tallas.jpg" alt="Tabla de tallas y medidas" style="max-width:100%; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        </a>
    `;
    info.style.display = 'block'; // Muestra el contenedor de información.
    info.scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para mostrar la sección "Contáctanos".
function mostrarContactanos() {
    const detalleContenedor = document.getElementById('detalleProducto');
    if (detalleContenedor) detalleContenedor.innerHTML = ''; // Limpia detalles.

    const gal = document.querySelector('.productos');
    if (gal) gal.style.display = 'none'; // Oculta la galería de productos.
    const info = document.getElementById('infoContainer');
    const linkWhats = "https://api.whatsapp.com/send?phone=000000000"; // Enlace de WhatsApp.
    info.innerHTML = `
        <h2 style="font-size:2rem; margin-bottom:12px;">Contáctanos</h2>
        <p style="color:#333; font-size:1.05rem;">Si tienes preguntas o quieres comprar un molde, escríbenos por:</p>
        <div style="margin-top:12px;">
            <a href="${linkWhats}" target="_blank" class="contacto-link" style="font-weight:bold;">WhatsApp (Chaty ejemplo)</a>
            <a href="mailto:ejemplo@correo.com" class="contacto-link" style="font-weight:bold;">ejemplo@correo.com</a>
        </div>
    `;
    info.style.display = 'block'; // Muestra el contenedor de información.
    info.scrollIntoView({
        behavior: 'smooth'
    });
}

// Evento que se ejecuta cuando el documento HTML ha sido completamente cargado.
// Inicia la página mostrando la galería principal de moldes.
document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosMoldes();
});

/* ===========================================================
   NUEVA FUNCIÓN: toggleTransferenciaInfo(productoId, index)
   Alterna el display del bloque de transferencia específico.
   =========================================================== */
function toggleTransferenciaInfo(productoId, index) {
    const id = `transferInfo-${productoId}-${index}`;
    const el = document.getElementById(id);
    if (!el) return;
    // Alternamos entre 'none' y 'block'
    if (el.style.display === 'block' || el.style.display === '') {
        el.style.display = (el.style.display === 'block') ? 'none' : 'block';
    } else {
        el.style.display = 'block';
    }
    // Desplazar ligeramente para que se note el bloque
    if (el.style.display === 'block') {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
// Referencia al audio
const audioLadrido = document.getElementById('audioLadrido');

// Agrega evento click a todo el documento para capturar clicks en botones
document.addEventListener('click', (event) => {
  // Solo si el click fue en un botón (o en un elemento con clase que uses para botones)
  if (event.target.tagName === 'BUTTON' || event.target.classList.contains('modal-paypal-btn') || event.target.classList.contains('modal-video')) {
    // Reproducir ladrido, reinicia para que suene cada click aunque sea rápido
    audioLadrido.currentTime = 0;
    audioLadrido.play();
  }
});

