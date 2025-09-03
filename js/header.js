document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#nav-bar').innerHTML = `
  <a href="index.html" id="logo"><img name="logo-farquina.png" alt="logo Farmoquímica" width="300"/></a>

  <button aria-label="Abrir menú" id="menu-btn">
    <span class="linea"></span>
    <span class="linea"></span>
    <span class="linea"></span>
  </button>
  <nav class="nav-lateral">
    <ul class="nav-links">
      <li><a href="index.html">Hogar</a></li>
      <li><a href="resource/sobre.html">Sobre nosotros</a></li>
      <li class="dropdown">
        <a href="#">Productos ▾</a>
        <ul class="dropdown-menu">
          <li><a href="resource/Limpieza.html">Limpieza del Hogar</a></li>
          <li><a href="resource/aseo.html">Aseo Personal</a></li>
          <li><a href="resource/vehiculo.html">Cuidado de Vehículos</a></li>
          <li><a href="resource/comestibles.html">Comestibles</a></li>
          <!-- resource/productos.html -->
        </ul>
      </li>
      <li><a href="resource/contactos.html">Contactos</a></li>
    </ul>
  </nav>s
  `;
});
