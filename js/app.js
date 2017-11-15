var selectPromo = document.getElementById('select-promo');
var imagesContainer = document.getElementById('images-container');
var subImagesContainer = null;

selectPromo.addEventListener('change', showPromo);

// arrays de las promociones:

var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];
// <img src="../assets/images/4-chile/anais-araya.jpg" alt="Anais Araya">

// constantes de ruta para el directorio

var CHILE4 = '4-chile';
var LIMA5 = '5-lima';
var LIMA6 = '6-lima';

// METODO QUE MUESTRA LAS Coders
//  primer parametro un array de nombres
// segundo parametro un str que indica la promoción

function showCoders(arr, promo) {
  // if (subImagesContainer)
  //   imagesContainer.removeChild(subImagesContainer);
  //
  // subImagesContainer = document.createElement('div');
  // imagesContainer.appendChild(subImagesContainer);

  for (var i = 0; i < arr4Chile.length; i++) {
    createImage(promo, arr[i]);
  };
}

// metodo que crea una imagen
// primer parametro es un str que indica la promo
// segundo parametro un str que indica el nombre

function createImage(promo, nombre) {
  var img = document.createElement('img');

  img.setAttribute('src', 'assets/images/' + promo + '/' + nombre + '.jpg');

  // subImagesContainer.appendChild(img);
  imagesContainer.appendChild(img);
}

function showPromo(event) {
  switch (true) {
  case event.target.value === '4chile':
    imagesContainer.textContent = '';
    showCoders(arr4Chile, CHILE4);
    break;
  case event.target.value === '5lima':
    imagesContainer.textContent = '';
    showCoders(arr5Lima, LIMA5);
    break;
  case event.target.value === '6lima':
    imagesContainer.textContent = '';
    showCoders(arr6Lima, LIMA6);
    break;
  default:
    imagesContainer.textContent = '';
    showCoders(arr4Chile, CHILE4);
    showCoders(arr5Lima, LIMA5);
    showCoders(arr6Lima, LIMA6);
  }
}

// showCoders(arr4Chile, CHILE4);
// showCoders(arr5Lima, LIMA5);
// showCoders(arr6Lima, LIMA6);
