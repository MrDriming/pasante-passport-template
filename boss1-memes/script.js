// IMAGENES
const imageUrl = document.getElementById("imageUrl");
const imageUpload = document.getElementById("imageUpload");
const memeImage = document.getElementById("memeImage");

// TEXTOS POR DEFECTO
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");

const topPreview = document.getElementById("topPreview");
const bottomPreview = document.getElementById("bottomPreview");

// DESCARGA
const downloadBtn = document.getElementById("downloadBtn");

// MEME
const meme = document.getElementById("meme");

// TEXTOS EXTRA
const addTextBtn = document.getElementById("addTextBtn");
const extraInputs = document.getElementById("extraInputs");

let textCounter = 0;

// ======================
// URL DE IMAGEN
// ======================

imageUrl.addEventListener("input", () => {
  memeImage.src = imageUrl.value;
});

// ======================
// SUBIR IMAGEN
// ======================

imageUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    memeImage.src = URL.createObjectURL(file);
  }
});

// ======================
// TEXTO SUPERIOR
// ======================

topText.addEventListener("input", () => {
  topPreview.textContent = topText.value;
});

// ======================
// TEXTO INFERIOR
// ======================

bottomText.addEventListener("input", () => {
  bottomPreview.textContent = bottomText.value;
});

// ======================
// PLANTILLAS
// ======================

const templateButtons = document.querySelectorAll(".templates button");

templateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    memeImage.src = button.dataset.url;
  });
});

// ======================
// DESCARGAR
// ======================

downloadBtn.addEventListener("click", () => {

  html2canvas(document.getElementById("meme"), {
    useCORS: true
  })
  .then((canvas) => {

    const link = document.createElement("a");

    link.download = "meme.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  });
});

// ======================
// DRAG & DROP
// ======================

function makeDraggable(element) {

  let isDragging = false;

  let offsetX;
  let offsetY;

  element.addEventListener("mousedown", (e) => {

    isDragging = true;

    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {

    isDragging = false;
  });
}

// HACER DRAGGABLE LOS TEXTOS POR DEFECTO

makeDraggable(topPreview);
makeDraggable(bottomPreview);

// ======================
// AGREGAR NUEVO TEXTO
// ======================

addTextBtn.addEventListener("click", () => {

  textCounter++;

  // INPUT NUEVO

  const input = document.createElement("input");

  input.type = "text";

  input.placeholder = `Texto ${textCounter}`;

  extraInputs.appendChild(input);

  // CONTENEDOR DEL TEXTO

  const textBox = document.createElement("div");

  textBox.classList.add("text-box");

  textBox.style.position = "absolute";

  textBox.style.left = "100px";

  textBox.style.top = "100px";

  // TEXTO

  const text = document.createElement("div");

  text.classList.add("meme-text");

  text.textContent = "";

  // BOTON BORRAR

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "❌";

  deleteBtn.classList.add("delete-btn");

  // ARMADO

  textBox.appendChild(text);

  textBox.appendChild(deleteBtn);

  meme.appendChild(textBox);

  // ACTUALIZAR TEXTO

  input.addEventListener("input", () => {

    text.textContent = input.value;
  });

  // ELIMINAR

  deleteBtn.addEventListener("click", () => {

    input.remove();

    textBox.remove();
  });

  // HACER MOVIBLE

  makeDraggable(textBox);
});