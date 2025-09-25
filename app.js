/* ======================================
 * Datos de la aplicación
 * ======================================
 */
const datos = {
    moldes: {
        camisetas: [
            {
                id: 'camiseta1',
                nombre: 'Camiseta Básica',
                precio: '4.75',
                descripcion: 'Molde de camiseta suave y ligera, ideal para los días calurosos. Permite que tu mascota se sienta cómoda y fresca durante todo el día.',
                tallas: ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL'],
                video: 'https://youtu.be/dlGSlN5rvR0?si=ekAoGgMQOjg-R4Zj',
                imagenes: ['./img/camiseta.jpg', './img/camiseta.jpg', './img/camiseta.jpg'],
                paypalLink: 'https://www.paypal.com/ncp/payment/ZWESEN2AYW4P8',
            },
        ],
        disfraces: [
            {
                id: 'disfraz1',
                nombre: 'Disfraz de Calabaza',
                precio: '5.75',
                descripcion: 'Disfraz divertido y colorido para que tu mascota sea la estrella en Halloween o cualquier fiesta de disfraces.',
                tallas: ['XXS','XS', 'S', 'M', 'L', 'XL', 'XXL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['./img/disfraces.jpg', './img/disfraces.jpg', './img/disfraces.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
        ]
    },
    sobreNosotros: `
        <div class="info-content">
            <h2>Sobre Nosotros</h2>
            <p>En <strong>Push Puppy</strong>, compartimos tu amor por las mascotas. Somos un equipo apasionado dedicado a ofrecer patrones de costura de alta calidad para ropa de perros. Creemos que cada mascota merece lucir con estilo y estar cómoda.</p>
            <p>Nuestros moldes están diseñados para ser fáciles de usar, incluso para principiantes. ¡Únete a nosotros y descubre el placer de vestir a tu compañero canino con ropa hecha con amor!</p>
        </div>
    `,
    tablaMedidas: `
        <div class="info-content">
            <h2>Tabla de Medidas</h2>
            <ul>
                <li><strong>Largo de la espalda:</strong> Mide desde la base del cuello hasta el inicio de la cola.</li>
                <li><strong>Contorno del pecho:</strong> Mide la parte más ancha del pecho, justo detrás de las patas delanteras.</li>
                <li><strong>Contorno del cuello:</strong> Mide alrededor del cuello de tu mascota.</li>
            </ul>
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
                    <tr><td>XS</td><td>20-22 cm</td><td>28-32 cm</td><td>19-21 cm</td></tr>
                    <tr><td>S</td><td>23-25 cm</td><td>36-40 cm</td><td>22-24 cm</td></tr>
                    <tr><td>M</td><td>28-30 cm</td><td>40-44 cm</td><td>26-28 cm</td></tr>
                    <tr><td>L</td><td>33-35 cm</td><td>44-48 cm</td><td>30-32 cm</td></tr>
                    <tr><td>XL</td><td>38-40 cm</td><td>52-56 cm</td><td>34-36 cm</td></tr>
                </tbody>
            </table>
        </div>
    `,
    contactanos: `
        <div class="info-content">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? ¡Nos encantaría saber de ti!</p>
            <ul>
                <li><strong>Correo:</strong> <a href="mailto:info@pushpuppy.com">info@pushpuppy.com</a></li>
                <li><strong>Redes sociales:</strong> Facebook, Instagram, YouTube y TikTok como <strong>Push Puppy</strong>.</li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/message/TU_NUMERO" target="_blank">Envíanos un mensaje</a></li>
            </ul>
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
            const divProducto = document.createElement('div');
            divProducto.className = 'producto celeste';
            divProducto.onclick = () => mostrarTipos(tipo);

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

            <!-- Botón YouTube -->
            <a href="${producto.video}" class="modal-video" target="_blank">
                <img src="./img/logo_youtube_blanco.png" alt="Youtube" class="modal-youtube-logo">
            </a>

            <!-- Formas de Pago -->
            <div class="titulo-pagos">Formas de Pago</div>

            <!-- PayPal -->
            <a href="${producto.paypalLink}" class="modal-paypal-btn" target="_blank">
                <img src="./img/logo_paypal.png" alt="PayPal" class="modal-paypal-logo">
            </a>

            <!-- Banco Pichincha -->
            <a href="javascript:void(0);" class="modal-bancopichincha-btn" onclick="toggleTransferenciaInfo(this); return false;">
                <img src="./img/logo_bancopichincha.png" alt="Banco Pichincha" class="modal-bancopichincha-logo">
            </a>

            <div class="transferencia-info" style="display: none;">
                <p>
                    <strong>Datos de la Cuenta:</strong><br>
                    Banco Pichincha<br>
                    Cuenta de Ahorros 1234567890<br>
                    Nombre: Push Puppy S.A.<br>
                    C.I.: 1712345678<br>
                    Correo: info@pushpuppy.com
                </p>
                <a href="https://wa.me/593988604752" target="_blank">Enviar Comprobante por WhatsApp</a>
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
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
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
        camisetas: 'La ropa más fresca para los días soleados',
        disfraces: 'Una fiesta de locos en casa',
    };
    return descripciones[tipo] || '';
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosMoldes();
});
