document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#nav-bar').innerHTML = `
    <div class="logo">
      <a href="index.html"><img name="logo-farquina.png" alt="logo Farmoquímica" width="300"/></a>
    </div>
    <ul class="nav-links">
      <li><a href="index.html">Hogar</a></li>
      <li><a href="resource/sobre.html">Sobre nosotros</a></li>
      <li class="dropdown">
        <a href="resource/productos.html">Productos ▾</a>
        <ul class="dropdown-menu">
          <li><a href="resource/Limpieza.html">Limpieza del Hogar</a></li>
          <li><a href="resource/aseo.html">Aseo Personal</a></li>
          <li><a href="resource/vehiculo.html">Cuidado de Vehículos</a></li>
          <li><a href="resource/comestibles.html">Comestibles</a></li>
        </ul>
      </li>
      <li><a href="resource/contactos.html">Contactos</a></li>
    </ul>
  `;
});