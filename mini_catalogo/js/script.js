
class MiHeader extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = "<h2>Mi Tienda</h2><hr>";
  }
}
customElements.define("mi-header", MiHeader);

class MiFooter extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = "<hr><p>2026 - Catálogo</p>";
  }
}
customElements.define("mi-footer", MiFooter);

class ProductCard extends HTMLElement {
  connectedCallback(){

    let nombre = this.getAttribute("nombre");
    let precio = this.getAttribute("precio");
    let descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <div style="border:1px solid gray; padding:10px; margin:10px;">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <strong>$${precio}</strong>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);

const productos = [
  {nombre:"Laptop", precio:"3500", descripcion:"16GB RAM"},
  {nombre:"Mouse", precio:"120", descripcion:"Inalámbrico"},
  {nombre:"Teclado", precio:"250", descripcion:"Mecánico"}
];

const template = document.getElementById("product-template");
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {

  const clon = template.content.cloneNode(true);

  const card = clon.querySelector("product-card");

  card.setAttribute("nombre", p.nombre);
  card.setAttribute("precio", p.precio);
  card.setAttribute("descripcion", p.descripcion);

  catalogo.appendChild(clon);

});