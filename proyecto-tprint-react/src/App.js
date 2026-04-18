import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [activo, setActivo] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "images/banner-productos.png",
    "images/tomatodo-600.png",
    "images/camiseta-color.png",
    "images/llaveros-spotify.png",
    "images/nuevo-banner-1.png",
    "images/nuevo-banner-2.png",
    "images/nuevo-banner-3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const agregarAlCarrito = (nombre, precio) => {
    if (isNaN(precio)) return;
    setCarrito([...carrito, { id: Date.now(), nombre, precio }]);
    setActivo(true);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const enviarWhatsApp = () => {
    if (carrito.length === 0) return alert("Carrito vacío");

    let msg = "¡Hola TPrint! Quisiera realizar un pedido:%0A%0A";
    carrito.forEach((i, index) => {
      msg += `${index + 1}. *${i.nombre}* ($${i.precio.toFixed(2)})%0A`;
    });
    msg += `%0A*Total estimado: $${total.toFixed(2)}*`;

    window.open(`https://wa.me/593987752653?text=${msg}`, "_blank");
  };

  return (
    <>
      <img src="/images/TPrint-logo-transparente.png" className="bg-watermark" />

      {/* HERO */}
      <section id="inicio" className="hero-section">
        <div className="hero-carousel">
          {images.map((img, i) => (
            <div
              key={i}
              className={`carousel-item ${i === index ? "active" : ""}`}
              style={{ backgroundImage: `url(/${img})` }}
            ></div>
          ))}
        </div>

        <div className="hero-content">
          <div className="header-logo-container no-box">
            <img src="/images/TPrint-logo-transparente.png" className="header-logo" />
          </div>
          <h1 className="hero-title">
            Plasmando tus ideas en cada detalle, con calidad y cercanía.
          </h1>
          <p className="hero-slogan">Tu Imaginación, Nuestra Impresión</p>
          <a href="#servicios" className="btn-primary-lg">
            Ver Catálogo Directo
          </a>
        </div>
      </section>

      {/* NAV */}
      <nav>
        <a href="#inicio" className="nav-logo">TPrint</a>

        <div className="nav-links">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Catálogo</a>
          <a href="#pagos">Pagos</a>
          <a href="#contacto">Ubicación</a>
        </div>

        <button className="cart-trigger" onClick={() => setActivo(!activo)}>
          <i className="fas fa-shopping-bag"></i>
          <span>{carrito.length}</span>
        </button>
      </nav>

      <main>
        {/* NOSOTROS */}
        <section id="nosotros" className="section">
          <div className="container-small">

            <img src="/images/Caricatura1.png" className="caricatura-guia" style={{display:'block', margin:'0 auto 15px'}} />

            <h2 className="section-title">Nuestra Esencia</h2>

            <div className="mision-vision-grid">
              <div className="mv-card">
                <div className="mv-icon"><i className="fas fa-rocket"></i></div>
                <h3>Misión</h3>
                <p>Transformar ideas en productos únicos y memorables, brindando soluciones personalizadas de alta calidad para empresas y personas.</p>
              </div>

              <div className="mv-card">
                <div className="mv-icon"><i className="fas fa-eye"></i></div>
                <h3>Visión</h3>
                <p>Ser la marca líder en personalización en Ecuador, reconocida por su innovación, cercanía y compromiso.</p>
              </div>
            </div>

            <div className="diferenciacion-box text-center">
              <h3>¿Qué nos hace diferentes?</h3>
              <p>
                En TPrint ofrecemos productos personalizados de alta calidad, pensados para reflejar lo que cada cliente es o quiere transmitir. Creamos desde el corazón, con creatividad, compromiso y esa cercanía que convierte cada proyecto en algo memorable.
              </p>
            </div>

            <div className="social-container text-center">
              <a href="https://instagram.com/tprint.ec" className="social-card ig">
                <div className="social-icon"><i className="fab fa-instagram"></i></div>
                <span>Instagram</span>
              </a>

              <a href="https://facebook.com/Tprint.ec/" className="social-card fb">
                <div className="social-icon"><i className="fab fa-facebook-f"></i></div>
                <span>Facebook</span>
              </a>

              <a href="https://tiktok.com/@tprint.ec" className="social-card tk">
                <div className="social-icon"><i className="fab fa-tiktok"></i></div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </section>

        {/* CATÁLOGO COMPLETO */}
        <section id="servicios" className="section">
          <h2 className="section-title">Catálogo Directo</h2>

          <div className="grid">

            <div className="card">
              <img src="/images/llaveros-spotify.png" className="card-img" />
              <h3>Llaveros de Acrílico</h3>
              <p>Personaliza con tus fotos y códigos de Spotify.</p>
              <p className="price">$2.50</p>
              <button className="btn-add" onClick={()=>agregarAlCarrito("Llaveros",2.5)}>Agregar</button>
            </div>

            <div className="card">
              <img src="/images/camiseta-color.png" className="card-img" />
              <h3>Camisetas de Polialgodon</h3>
              <p>Estampados DTF full color y duraderos.</p>
              <p className="price">$15.00</p>
              <button className="btn-add" onClick={()=>agregarAlCarrito("Camiseta",15)}>Agregar</button>
            </div>

            <div className="card">
              <img src="/images/tomatodo-600.png" className="card-img" />
              <h3>Tomatodo 600ml</h3>
              <p>Ideal para el gimnasio o la oficina.</p>
              <p className="price">$8.00</p>
              <button className="btn-add" onClick={()=>agregarAlCarrito("Tomatodo",8)}>Agregar</button>
            </div>

            <div className="card">
              <img src="/images/senaletica-clinica.png" className="card-img" />
              <h3>Señalética</h3>
              <p>En Sintra, cualquier medida.</p>
              <p className="price">Cotizar</p>
              <button className="btn-add">Consultar</button>
            </div>

          </div>
        </section>

        {/* PAGOS COMPLETO */}
        <section id="pagos" className="section bg-light">
          <div className="container-small">

            <h2 className="section-title">Métodos de Pago</h2>

            <div className="payment-grid">

              <div className="payment-card pichincha-bg">
                <img src="/images/logo-pichincha.png" className="payment-logo" />
                <h4>B. Pichincha</h4>
              </div>

              <div className="payment-card guayaquil-bg">
                <img src="/images/logo-guayaquil.png" className="payment-logo" />
                <h4>B. Guayaquil</h4>
              </div>

              <div className="payment-card produbanco-bg">
                <img src="/images/logo-produbanco.png" className="payment-logo" />
                <h4>Produbanco</h4>
              </div>

              <div className="payment-card deuna-bg">
                <img src="/images/logo-deuna.png" className="payment-logo" />
                <h4>Deuna</h4>
              </div>

            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="contacto" className="section">
          <div className="container-small">

            <h2 className="section-title">Ubicación</h2>

            <p className="address">📍 Sofía Gonzáles y Pastora Tufiño</p>

            <div className="map-container">
              <iframe src="https://www.google.com/maps?q=TPrint&output=embed" width="100%" height="100%"></iframe>
            </div>

          </div>
        </section>

      </main>

      {/* CARRITO */}
      <div className={`carrito-panel ${activo ? "activo" : ""}`}>
        <div className="carrito-header">
          <h3>Mi Pedido</h3>
          <button onClick={()=>setActivo(false)}>Cerrar</button>
        </div>

        <div className="carrito-body">
          {carrito.map(item=>(
            <div key={item.id} className="item-carrito">
              <span>{item.nombre}</span>
              <button onClick={()=>eliminarDelCarrito(item.id)}>❌</button>
            </div>
          ))}
        </div>

        <div className="carrito-footer">
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={enviarWhatsApp}>Confirmar pedido</button>
        </div>
      </div>

      <a href="https://wa.me/593987752653" className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;