/* ======================================
 * Datos de la aplicación
 * ======================================
 */
const datos = {
    moldes: {
        sacos: [
            {
                id: 'saco1',
                nombre: 'Saco Moderno',
                precio: '5.99',
                descripcion: 'Saco con capucha, un diseño ideal para proteger a tu mascota del frío y la lluvia. Confeccionado con tela polar y acabados de alta calidad para un ajuste cómodo. Ideal para un perro o un gato.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/saco.jpg', './img/saco.jpg', './img/saco.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        chompas: [
            {
                id: 'chompa1',
                nombre: 'Chompa Elegante',
                precio: '5.99',
                descripcion: 'Chompa con cuello de tortuga, perfecta para mantener a tu mascota elegante y abrigada en cualquier estación. Su diseño permite total libertad de movimiento.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/chompa.jpg', './img/chompa.jpg', './img/chompa.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        vestidos: [
            {
                id: 'vestido1',
                nombre: 'Vestido Florido',
                precio: '5.99',
                descripcion: 'Vestido elegante y fresco con un diseño de flores, ideal para los días de verano. Tu perrita lucirá hermosa y cómoda.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/vestido.jpg', './img/vestido.jpg', './img/vestido.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        camisetas: [
            {
                id: 'camiseta1',
                nombre: 'Camiseta Básica',
                precio: '5.99',
                descripcion: 'Camiseta suave y ligera, ideal para los días calurosos. Permite que tu mascota se sienta cómoda y fresca durante todo el día.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/camiseta.jpg', './img/camiseta.jpg', './img/camiseta.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        gorros: [
            {
                id: 'gorro1',
                nombre: 'Gorro de Invierno',
                precio: '5.99',
                descripcion: 'Un gorro cálido y cómodo para proteger a tu mascota del frío extremo. Perfecto para los paseos de invierno.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/gorra.jpg', './img/gorra.jpg', './img/gorra.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        disfraces: [
            {
                id: 'disfraz1',
                nombre: 'Disfraz de Calabaza',
                precio: '5.99',
                descripcion: 'Disfraz divertido y colorido para que tu mascota sea la estrella en Halloween o cualquier fiesta de disfraces. Un disfraz de locos en casa.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/disfraces.jpg', './img/disfraces.jpg', './img/disfraces.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        ponchos: [
            {
                id: 'poncho1',
                nombre: 'Poncho de Lana',
                precio: '5.99',
                descripcion: 'Poncho artesanal de lana, perfecto para proteger a tu mascota del frío con estilo. Su diseño tradicional lo hace único y muy confortable.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/ponchos.jpg', './img/ponchos.jpg', './img/ponchos.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        trajes: [
            {
                id: 'traje1',
                nombre: 'Traje Formal',
                precio: '5.99',
                descripcion: 'Traje de etiqueta para las ocasiones más formales. Con este traje, tu mascota lucirá elegante y distinguida en bodas o eventos importantes.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/trajes.jpg', './img/trajes.jpg', './img/trajes.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        enterizos: [
            {
                id: 'enterizo1',
                nombre: 'Enterizo Pijama',
                precio: '5.99',
                descripcion: 'La pijama perfecta para tu mascota. Enterizo cómodo y suave, ideal para una noche de descanso.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/enterizos.jpg', './img/enterizos.jpg', './img/enterizos.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        chalecos: [
            {
                id: 'chaleco1',
                nombre: 'Chaleco de Cuadros',
                precio: '5.99',
                descripcion: 'Un chaleco con un diseño a cuadros clásico, ideal para un look casual y elegante. El mejor amigo del clima frío.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/chalecos.jpg', './img/chalecos.jpg', './img/chalecos.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ],
        abrigos: [
            {
                id: 'abrigo1',
                nombre: 'Abrigo con Peluche',
                precio: '5.99',
                descripcion: 'Abrigo para invierno con un forro de peluche, ideal para mantener a tu mascota protegida del frío extremo. Que nada impida salir a pasear.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/abrigo.jpg', './img/abrigo.jpg', './img/abrigo.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ]
    },
    sobreNosotros: `
        <div class="info-content">
            <h2>Sobre Nosotros</h2>
            <p>En <strong>Push Puppy</strong>, compartimos tu amor por las mascotas. Somos un equipo apasionado dedicado a ofrecer patrones de costura de alta calidad para ropa de perros. Creemos que cada mascota merece lucir con estilo y estar cómoda, sin importar su tamaño o raza. Nuestra misión es empoderar a los amantes de los perros para que creen prendas únicas y personalizadas, fomentando la conexión especial entre tú y tu mejor amigo.</p>
            <p>Desde sacos abrigados hasta disfraces divertidos y vestidos elegantes, nuestros moldes están diseñados para ser fáciles de usar, incluso para principiantes. Nos comprometemos con la excelencia, la creatividad y la comunidad. ¡Únete a nosotros y descubre el placer de vestir a tu compañero canino con ropa hecha con amor!</p>
        </div>
    `,
    tablaMedidas: `
        <div class="info-content">
            <h2>Tabla de Medidas</h2>
            <p><strong>Cómo tomar las medidas a tu mascota:</strong></p>
            <ul>
                <li><strong>Largo de la espalda:</strong> Mide desde la base del cuello hasta el inicio de la cola.</li>
                <li><strong>Contorno del pecho:</strong> Mide la parte más ancha del pecho, justo detrás de las patas delanteras.</li>
                <li><strong>Contorno del cuello:</strong> Mide alrededor del cuello de tu mascota, donde normalmente se ajusta el collar.</li>
            </ul>
            <p><strong>Tabla de medidas generales (orientativa):</strong></p>
            <table>
                <thead>
                    <tr>
                        <th>Talla</th>
                        <th>Largo Espalda</th>
                        <th>Pecho</th>
                        <th>Cuello</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XS</td>
                        <td>20-22 cm</td>
                        <td>28-32 cm</td>
                        <td>19-21 cm</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>23-25 cm</td>
                        <td>36-40 cm</td>
                        <td>22-24 cm</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>28-30 cm</td>
                        <td>40-44 cm</td>
                        <td>26-28 cm</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>33-35 cm</td>
                        <td>44-48 cm</td>
                        <td>30-32 cm</td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td>38-40 cm</td>
                        <td>52-56 cm</td>
                        <td>34-36 cm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    contactanos: `
        <div class="info-content">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? ¡Nos encantaría saber de ti! Puedes contactarnos a través de los siguientes medios:</p>
            <ul>
                <li><strong>Correo electrónico:</strong> <a href="mailto:info@pushpuppy.com">info@pushpuppy.com</a></li>
                <li><strong>Redes sociales:</strong> Encuéntranos en Facebook, Instagram, YouTube y TikTok como **Push Puppy**.</li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/message/TU_NUMERO" target="_blank">Envíanos un mensaje</a></li>
            </ul>
            <p>También puedes llenar el siguiente formulario para que nos pongamos en contacto contigo lo antes posible.</p>
            <form action="submit_form.php" method="post" class="contact-form">
                <label for="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit" class="submit-button">Enviar</button>
            </form>
        </div>
    `
};

/* ======================================
 * Elementos del DOM
 * ======================================
 */
const moldesContainer = document.getElementById('moldes');
const detalleProductoContainer = document.getElementById('detalleProducto');
const infoContainer = document.getElementById('infoContainer');
const audioLadrido = document.getElementById('audioLadrido');
const body = document.body;

/* ======================================
 * Funciones principales
 * ======================================
 */
function mostrarTodosMoldes() {
    moldesContainer.innerHTML = '';
    moldesContainer.style.display = 'flex';
    detalleProductoContainer.innerHTML = '';
    detalleProductoContainer.style.display = 'none';
    infoContainer.innerHTML = '';
    infoContainer.style.display = 'none';

    for (const tipo in datos.moldes) {
        const primerProducto = datos.moldes[tipo][0];
        if (primerProducto) {
            const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            const colorClase = (tipo === 'sacos' || tipo === 'vestidos' || tipo === 'gorros' || tipo === 'ponchos' || tipo === 'enterizos' || tipo === 'abrigos') ? 'rosa' : 'celeste';

            const divProducto = document.createElement('div');
            divProducto.className = `producto ${colorClase}`;
            divProducto.onclick = () => mostrarTipos(tipo);

            // Se toma la primera imagen de la lista de imágenes para mostrarla en la vista principal
            divProducto.innerHTML = `
                <img src="${primerProducto.imagenes[0]}" alt="${tipoCapitalizado}">
                <div>
                    <h2>${tipoCapitalizado}</h2>
                    <p>${obtenerDescripcionCorta(tipo)}</p>
                </div>
            `;

            moldesContainer.appendChild(divProducto);
        }
    }
}


function mostrarTipos(tipo) {
    moldesContainer.style.display = 'none';
    infoContainer.style.display = 'none';
    detalleProductoContainer.innerHTML = '';
    detalleProductoContainer.style.display = 'block';
    
    const productosDelTipo = datos.moldes[tipo];

    if (productosDelTipo) {
        const gridContainer = document.createElement('div');
        gridContainer.id = 'detalleProducto-grid-container';

        productosDelTipo.forEach(producto => {
            const modalFicha = crearFichaProducto(producto);
            gridContainer.appendChild(modalFicha);
        });

        const volverBtn = document.createElement('button');
        volverBtn.className = 'volver-boton';
        volverBtn.textContent = 'Volver a Moldes';
        volverBtn.onclick = () => mostrarTodosMoldes();

        detalleProductoContainer.appendChild(gridContainer);
        detalleProductoContainer.appendChild(volverBtn);
    } else {
        detalleProductoContainer.innerHTML = '<h2>No se encontraron moldes para esta categoría.</h2>';
    }
}


function crearFichaProducto(producto) {
    const modalFicha = document.createElement('div');
    modalFicha.className = 'modal-ficha-producto';

    modalFicha.innerHTML = `
        <div class="modal-ficha-izq">
            <img class="modal-img-principal" src="${producto.imagenes[0]}" alt="${producto.nombre}">
            <div class="modal-miniaturas">
                ${producto.imagenes.map(src => `<img class="modal-miniatura" src="${src}" alt="Miniatura de ${producto.nombre}" onclick="cambiarImagenPrincipal(this)">`).join('')}
            </div>
        </div>
        <div class="modal-ficha-der">
            <h2>${producto.nombre}</h2>
            <div class="modal-precio">Precio: $${producto.precio} USD</div>
            <div class="modal-desc">${producto.descripcion}</div>
            <div class="modal-tallas-texto">Tallas disponibles:</div>
            <div class="modal-tallas-lista">${producto.tallas.join(', ')}</div>
            
            <a href="${producto.video}" class="modal-video" target="_blank" onclick="fbq('track', 'watch_video', {content_name: '${producto.nombre}'});">
                <img src="./img/logo_youtube.png" alt="Youtube" class="modal-paypal-logo">
            </a>

            <div class="titulo-pagos">Formas de Pago</div>
            <a href="${producto.paypalLink}" class="modal-paypal-btn" target="_blank" onclick="fbq('track', 'AddToCart', {content_name: '${producto.nombre}', value: '${producto.precio}', currency: 'USD'}); gtag('event', 'add_to_cart', { 'currency': 'USD', 'value': ${producto.precio}, 'items': [{ 'item_name': '${producto.nombre}', 'item_id': '${producto.id}' }] });">
                <img src="./img/logo_paypal.png" alt="Pagar con PayPal" class="modal-paypal-logo">
            </a>
            <button class="modal-transferencia-btn" onclick="toggleTransferenciaInfo(this)">Transferencia Bancaria (ver datos)</button>
            <div class="transferencia-info" style="display: none;">
                <p>
                    <strong>Datos de la Cuenta:</strong><br>
                    Banco Pichincha<br>
                    Cuenta de Ahorros 1234567890<br>
                    Nombre: Push Puppy S.A.<br>
                    C.I.: 1712345678<br>
                    Correo: info@pushpuppy.com
                </p>
                <p>
                    Una vez realizada la transferencia, por favor envía una foto del comprobante de pago a nuestro WhatsApp.
                </p>
                <a href="https://wa.me/593988604752?text=He%20realizado%20el%20pago%20de%20$${producto.precio}%20USD%20para%20el%20molde%20de%20${producto.nombre}%20y%20te%20env%C3%ADo%20el%20comprobante." target="_blank" onclick="fbq('track', 'StartCheckout', {content_name: 'Transferencia ${producto.nombre}', value: '${producto.precio}', currency: 'USD'});">Enviar Comprobante por WhatsApp</a>
            </div>
        </div>
    `;

    return modalFicha;
}

function cambiarImagenPrincipal(miniatura) {
    const imgPrincipal = miniatura.closest('.modal-ficha-producto').querySelector('.modal-img-principal');
    imgPrincipal.src = miniatura.src;
}

function toggleTransferenciaInfo(button) {
    const infoDiv = button.nextElementSibling;
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}

function mostrarContenidoInfo(htmlContent) {
    moldesContainer.style.display = 'none';
    detalleProductoContainer.style.display = 'none';
    infoContainer.innerHTML = htmlContent;
    infoContainer.style.display = 'block';
}

function mostrarSobreNosotros() {
    mostrarContenidoInfo(datos.sobreNosotros);
    reproducirLadrido();
}

function mostrarTablaMedidas() {
    mostrarContenidoInfo(datos.tablaMedidas);
    reproducirLadrido();
}

function mostrarContactanos() {
    mostrarContenidoInfo(datos.contactanos);
    reproducirLadrido();
}

function reproducirLadrido() {
    audioLadrido.play();
}


function obtenerDescripcionCorta(tipo) {
    const descripciones = {
        sacos: 'Dale el mejor abrigo y el más lindo estilo',
        chompas: 'Diseños sencillos para paseos cotidianos',
        vestidos: 'Prendas con glamour para tu perrita',
        camisetas: 'La ropa mas fresca para los días soleados',
        gorros: 'Protegelo de los rayos del sol',
        disfraces: 'Una fiesta de locos en casa',
        ponchos: 'Cubre a tu mascota del frio con estilo',
        trajes: 'Elegancia total en su caminar',
        enterizos: 'La pijama perfecta para tu mascota',
        chalecos: 'El mejor amigo del clima frio',
        abrigos: 'Que nada impida salir a pasear',
    };
    return descripciones[tipo] || '';
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosMoldes();
});
