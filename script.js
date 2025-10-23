const productos = [
  {
      nombre:'RAM TRX',
      descripcion: 'Pickup de alto rendimiento todoterreno con un motor V8 supercargado de 6.2 litros que produce 702 caballos de fuerza y 650 lb-pie de torque.',
      precio:  2799999,
      imagen:'ram.webp'
  },
  {
      nombre:'Lobo Raptor R',
      descripcion: 'Camioneta todoterreno de alto rendimiento de Ford, caracterizada por su potente motor V8 supercargado de 5.2 litros, que entrega 720 hp y 640 lb-pie de torque.',
      precio: 2951100,
      imagen:'raptor.jpg'
  },
  {
      nombre:'Ford Shelby F-150',
      descripcion: 'Camioneta de alto rendimiento basada en la F-150, que se distingue por su motor supercargado V8 de 5.0 litros, que puede generar 775 caballos de fuerza o más, junto con una suspensión todoterreno de alta gama con amortiguadores Fox.',
      precio: 3000000,
      imagen:'shelby.jpg'
  },
  {
      nombre:'Cadillac Escalade',
      descripcion: 'SUV de lujo de tamaño completo, conocida por su diseño imponente, tecnología avanzada y habitáculo espacioso.',
      precio: 3683200,
      imagen:'cadillac.png'
  }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';

  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;

  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;
  
  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;

  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = `$${producto.precio.toFixed(2)}`;

  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';

  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);

  return card;
  
}

function renderizarCatalogo() {
  productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
  });
}

window.onload = renderizarCatalogo;