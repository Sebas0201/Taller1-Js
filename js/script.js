function crearElemento(tipoElemento) {

  var elemento = document.createElement(tipoElemento);
  elemento.style.color = "black";
  return elemento;

}

function crearElementoConTexto(tipoElemento, contenidoTexto) {

  var elemento = crearElemento(tipoElemento);
  var texto = document.createTextNode(contenidoTexto);
  elemento.appendChild(texto);
  return elemento;

}

function crearImagen(srcImagen, altTexto) {

  var imagen = crearElemento("img");
  imagen.src = srcImagen;
  imagen.alt = altTexto;
  return imagen;

}

function agregarElementoAlBody(elemento) {

  document.body.appendChild(elemento);

}

function agregarElementoAContenedor(elemento, contenedor) {

  contenedor.appendChild(elemento);

}

function crearVideo(srcVideo, altTexto) {

  var video = crearElemento("video");
  video.src = srcVideo;
  video.alt = altTexto;
  video.controls = true;
  return video;

}
