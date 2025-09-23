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
                imagenes: ['img/sacos/saco1.jpg', 'img/sacos/saco1_1.jpg', 'img/sacos/saco1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'saco2',
                nombre: 'Saco Casual',
                precio: '5.99',
                descripcion: 'Saco ideal para paseos cotidianos, ofrece comodidad y estilo. Fácil de poner y quitar, con un diseño que se adapta a cualquier raza de perro.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/sacos/saco2.jpg', 'img/sacos/saco2_1.jpg', 'img/sacos/saco2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'saco3',
                nombre: 'Saco con Peluche',
                precio: '5.99',
                descripcion: 'Saco suave y abrigador, perfecto para mantener a tu mascota calientita en los días fríos. Su forro de peluche proporciona una sensación de confort inigualable.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/sacos/saco3.jpg', 'img/sacos/saco3_1.jpg', 'img/sacos/saco3_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'saco4',
                nombre: 'Saco de Rayas',
                precio: '5.99',
                descripcion: 'Un diseño clásico y elegante con rayas, ideal para cualquier ocasión. Hecho de un material ligero pero cálido, perfecto para el entretiempo.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/sacos/saco4.jpg', 'img/sacos/saco4_1.jpg', 'img/sacos/saco4_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'saco5',
                nombre: 'Saco de Lujo',
                precio: '5.99',
                descripcion: 'Un saco exclusivo con detalles únicos, para que tu mascota destaque. Confeccionado con materiales de alta gama para una durabilidad y elegancia superiores.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/sacos/saco5.jpg', 'img/sacos/saco5_1.jpg', 'img/sacos/saco5_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'saco6',
                nombre: 'Saco de Lana',
                precio: '5.99',
                descripcion: 'Hecho de lana para una máxima calidez. Este saco es la elección perfecta para los inviernos más duros, manteniendo a tu mascota abrigada y cómoda.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/sacos/saco6.jpg', 'img/sacos/saco6_1.jpg', 'img/sacos/saco6_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        chompas: [
            {
                id: 'chompa1',
                nombre: 'Chompa Elegante',
                precio: '5.99',
                descripcion: 'Chompa con cuello de tortuga, perfecta para mantener a tu mascota elegante y abrigada en cualquier estación. Su diseño permite total libertad de movimiento.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chompas/chompa1.jpg', 'img/chompas/chompa1_1.jpg', 'img/chompas/chompa1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'chompa2',
                nombre: 'Chompa Clasica',
                precio: '5.99',
                descripcion: 'Un clásico que nunca falla, ideal para cualquier raza de perro o gato. Ligera y suave, ideal para usarla en el interior de la casa.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chompas/chompa2.jpg', 'img/chompas/chompa2_1.jpg', 'img/chompas/chompa2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'chompa3',
                nombre: 'Chompa para Pastor Alemán',
                precio: '5.99',
                descripcion: 'Esta chompa con capucha es perfecta para razas grandes como el Pastor Alemán. El diseño de camuflaje lo hace ver imponente. Su diseño permite total libertad de movimiento.',
                tallas: ['L', 'XL', 'XXL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chompas/chompa3.jpg', 'img/chompas/chompa3_1.jpg', 'img/chompas/chompa3_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'chompa4',
                nombre: 'Chompa a Cuadros',
                precio: '5.99',
                descripcion: 'Un estilo a cuadros para un look sofisticado. Ligera y suave, ideal para usarla en el interior de la casa y en las noches de fogata.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chompas/chompa4.jpg', 'img/chompas/chompa4_1.jpg', 'img/chompas/chompa4_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'chompa5',
                nombre: 'Chompa para Gato',
                precio: '5.99',
                descripcion: 'Chompa con cuello de tortuga, perfecta para mantener a tu gato elegante y abrigado en cualquier estación. El diseño permite total libertad de movimiento.',
                tallas: ['XS', 'S', 'M'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chompas/chompa5.jpg', 'img/chompas/chompa5_1.jpg', 'img/chompas/chompa5_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        vestidos: [
            {
                id: 'vestido1',
                nombre: 'Vestido Florido',
                precio: '5.99',
                descripcion: 'Vestido elegante y fresco con un diseño de flores, ideal para los días de verano. Tu perrita lucirá hermosa y cómoda.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/vestidos/vestido1.jpg', 'img/vestidos/vestido1_1.jpg', 'img/vestidos/vestido1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'vestido2',
                nombre: 'Vestido de Fiesta',
                precio: '5.99',
                descripcion: 'Un vestido diseñado para ocasiones especiales. Dale a tu perrita el glamour que se merece para cualquier fiesta o evento formal. ¡Elegancia total en su caminar!',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/vestidos/vestido2.jpg', 'img/vestidos/vestido2_1.jpg', 'img/vestidos/vestido2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'vestido3',
                nombre: 'Vestido a Rayas',
                precio: '5.99',
                descripcion: 'Un vestido fresco con un diseño a rayas que nunca pasa de moda. Ideal para paseos en el parque y días soleados.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/vestidos/vestido3.jpg', 'img/vestidos/vestido3_1.jpg', 'img/vestidos/vestido3_2.jpg'],
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
                imagenes: ['img/camisetas/camiseta1.jpg', 'img/camisetas/camiseta1_1.jpg', 'img/camisetas/camiseta1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'camiseta2',
                nombre: 'Camiseta Playera',
                precio: '5.99',
                descripcion: 'La ropa más fresca para los días soleados. Esta camiseta es perfecta para un día de playa o un paseo en el parque.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/camisetas/camiseta2.jpg', 'img/camisetas/camiseta2_1.jpg', 'img/camisetas/camiseta2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        gorros: [
            {
                id: 'gorro1',
                nombre: 'Gorro de Invierno',
                precio: '5.99',
                descripcion: 'Un gorro cálido y cómodo para proteger a tu mascota del frío extremo. Perfecto para los paseos de invierno.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/gorros/gorro1.jpg', 'img/gorros/gorro1_1.jpg', 'img/gorros/gorro1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'gorro2',
                nombre: 'Gorro de Verano',
                precio: '5.99',
                descripcion: 'Gorro ligero para proteger a tu mascota de los rayos del sol en los días de calor. Confeccionado con tela de algodón para mayor comodidad.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/gorros/gorro2.jpg', 'img/gorros/gorro2_1.jpg', 'img/gorros/gorro2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        disfraces: [
            {
                id: 'disfraz1',
                nombre: 'Disfraz de Calabaza',
                precio: '5.99',
                descripcion: 'Disfraz divertido y colorido para que tu mascota sea la estrella en Halloween o cualquier fiesta de disfraces. Un disfraz de locos en casa.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/disfraces/disfraz1.jpg', 'img/disfraces/disfraz1_1.jpg', 'img/disfraces/disfraz1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'disfraz2',
                nombre: 'Disfraz de Dinosaurio',
                precio: '5.99',
                descripcion: 'Un disfraz original y gracioso para que tu mascota se vea como un pequeño dinosaurio. Perfecto para un perrito o un gato.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/disfraces/disfraz2.jpg', 'img/disfraces/disfraz2_1.jpg', 'img/disfraces/disfraz2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        ponchos: [
            {
                id: 'poncho1',
                nombre: 'Poncho de Lana',
                precio: '5.99',
                descripcion: 'Poncho artesanal de lana, perfecto para proteger a tu mascota del frío con estilo. Su diseño tradicional lo hace único y muy confortable.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/ponchos/poncho1.jpg', 'img/ponchos/poncho1_1.jpg', 'img/ponchos/poncho1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'poncho2',
                nombre: 'Poncho con Capucha',
                precio: '5.99',
                descripcion: 'Cubre a tu mascota del frío con estilo. Este poncho con capucha es ideal para paseos en días de lluvia o viento.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/ponchos/poncho2.jpg', 'img/ponchos/poncho2_1.jpg', 'img/ponchos/poncho2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        trajes: [
            {
                id: 'traje1',
                nombre: 'Traje Formal',
                precio: '5.99',
                descripcion: 'Traje de etiqueta para las ocasiones más formales. Con este traje, tu mascota lucirá elegante y distinguida en bodas o eventos importantes.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/trajes/traje1.jpg', 'img/trajes/traje1_1.jpg', 'img/trajes/traje1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'traje2',
                nombre: 'Traje Casual',
                precio: '5.99',
                descripcion: 'Un traje casual para un look moderno y chic. Ideal para una tarde de paseo o una visita al café.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/trajes/traje2.jpg', 'img/trajes/traje2_1.jpg', 'img/trajes/traje2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'traje3',
                nombre: 'Traje de Fiesta',
                precio: '5.99',
                descripcion: 'Traje de fiesta con un estilo único y sofisticado. Ideal para cualquier celebración.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/trajes/traje3.jpg', 'img/trajes/traje3_1.jpg', 'img/trajes/traje3_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        enterizos: [
            {
                id: 'enterizo1',
                nombre: 'Enterizo Pijama',
                precio: '5.99',
                descripcion: 'La pijama perfecta para tu mascota. Enterizo cómodo y suave, ideal para una noche de descanso.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/enterizos/enterizo1.jpg', 'img/enterizos/enterizo1_1.jpg', 'img/enterizos/enterizo1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'enterizo2',
                nombre: 'Enterizo de Lluvia',
                precio: '5.99',
                descripcion: 'Enterizo impermeable para proteger a tu mascota de la lluvia y la humedad. Un diseño práctico y seguro para los días lluviosos.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/enterizos/enterizo2.jpg', 'img/enterizos/enterizo2_1.jpg', 'img/enterizos/enterizo2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        chalecos: [
            {
                id: 'chaleco1',
                nombre: 'Chaleco de Cuadros',
                precio: '5.99',
                descripcion: 'Un chaleco con un diseño a cuadros clásico, ideal para un look casual y elegante. El mejor amigo del clima frío.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chalecos/chaleco1.jpg', 'img/chalecos/chaleco1_1.jpg', 'img/chalecos/chaleco1_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            },
            {
                id: 'chaleco2',
                nombre: 'Chaleco de Lujo',
                precio: '5.99',
                descripcion: 'Chaleco elegante con detalles únicos, para que tu mascota se vea sofisticada en cualquier ocasión. Un chaleco suave y cómodo, ideal para los días fríos.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/chalecos/chaleco2.jpg', 'img/chalecos/chaleco2_1.jpg', 'img/chalecos/chaleco2_2.jpg'],
                paypalLink: 'https://paypal.me/pushpuppy/5.99usd',
            }
        ],
        abrigos: [
            {
                id: 'abrigo1',
                nombre: 'Abrigo con Peluche',
                precio: '5.99',
                descripcion: 'Abrigo para invierno con un forro de peluche, ideal para mantener a tu mascota protegida del frío extremo. Que nada impida salir a pasear.',
                tallas: ['XS', 'S', 'M', 'L', 'XL'],
                video: 'https://youtu.be/zD1kX_3Bq1k',
                imagenes: ['img/abrigos/abrigo1.jpg', 'img/abrigos/abrigo1_1.jpg', 'img/abrigos/abrigo1_2.jpg'],
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
    // Limpiar y mostrar el contenedor principal de moldes
    moldesContainer.innerHTML = '';
    moldesContainer.style.display = 'flex';
    
    // Ocultar los otros contenedores
    detalleProductoContainer.innerHTML = '';
    detalleProductoContainer.style.display = 'none';
    infoContainer.innerHTML = '';
    infoContainer.style.display = 'none';

    // Recorrer cada tipo de molde y crear las tarjetas de producto
    for (const tipo in datos.moldes) {
        const primerProducto = datos.moldes[tipo][0];
        if (primerProducto) {
            const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            const colorClase = (tipo === 'sacos' || tipo === 'vestidos' || tipo === 'gorros' || tipo === 'ponchos' || tipo === 'enterizos' || tipo === 'abrigos') ? 'rosa' : 'celeste';

            const divProducto = document.createElement('div');
            divProducto.className = `producto ${colorClase}`;
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
    // Ocultar los otros contenedores
    moldesContainer.style.display = 'none';
    infoContainer.style.display = 'none';

    // Limpiar y mostrar el contenedor de detalles de producto
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
            <div class="titulo-video">Ver Video (Youtube)</div>
            <a href="${producto.video}" class="modal-video" target="_blank" onclick="fbq('track', 'watch_video', {content_name: '${producto.nombre}'});">
                <img src="img/youtube_icon.png" alt="Youtube" width="24" height="24">
                <span> Ver Instrucciones</span>
            </a>
            <div class="titulo-pagos">Formas de Pago</div>
            <a href="${producto.paypalLink}" class="modal-paypal-btn" target="_blank" onclick="fbq('track', 'AddToCart', {content_name: '${producto.nombre}', value: '${producto.precio}', currency: 'USD'}); gtag('event', 'add_to_cart', { 'currency': 'USD', 'value': ${producto.precio}, 'items': [{ 'item_name': '${producto.nombre}', 'item_id': '${producto.id}' }] });">
                <img src="img/paypal-logo.png" alt="Pagar con PayPal" class="modal-paypal-logo">
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
    // Ocultar los otros contenedores
    moldesContainer.style.display = 'none';
    detalleProductoContainer.style.display = 'none';

    // Limpiar y mostrar el contenedor de información general
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

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // La función mostrarTodosMoldes() se llama directamente para cargar el contenido
    // una vez que el DOM esté listo.
    mostrarTodosMoldes();
});
