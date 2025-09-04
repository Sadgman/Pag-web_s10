document.addEventListener('DOMContentLoaded', function() {
  document.URL.replace()
  document.querySelector('#nav-bar').innerHTML = `
  <a href="../index.html" id="logo"><img name="logo-farquina.png" alt="logo Farmoquímica" width="300"/></a>

  <button aria-label="Abrir menú" id="menu-btn">
    <span class="linea"></span>
    <span class="linea"></span>
    <span class="linea"></span>
  </button>
  <nav class="nav-lateral">
    <ul class="nav-links">
      <li><a href="../index.html">Hogar</a></li>
      <li><a href="sobre.html">Sobre nosotros</a></li>
      <li class="dropdown">
        <a href="#">Productos ▾</a>
        <ul class="dropdown-menu">
          <li><a href="Limpieza.html">Limpieza del Hogar</a></li>
          <li><a href="aseo.html">Aseo Personal</a></li>
          <li><a href="vehiculo.html">Cuidado de Vehículos</a></li>
          <li><a href="comestibles.html">Comestibles</a></li>
          <li><a href="productos.html">Todos</a></li>
        </ul>
      </li>
      <li><a href="contactos.html">Contactos</a></li>
    </ul>
  </nav>
  `;

});
