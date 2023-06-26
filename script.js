const jokes = [
  {
    question: "¿Cuántos programadores se necesitan para cambiar una bombilla?",
    answer: "Ninguno, es un problema de hardware.",
  },
  {
    question: "¿Cuál es el lenguaje de programación más musical?",
    answer: "C#",
  },
  {
    question: "¿Cuál es el café favorito de un programador?",
    answer: "Java.",
  },
  {
    question: "¿Por qué el programador se llevó paraguas al trabajo?",
    answer: "Por si llovía archivos en la nube.",
  },
  {
    question: "¿Qué le dice un programador a su pareja?",
    answer:
      '"Eres mi booleano, siempre te evalúo en mi corazón como verdadero."',
  },
];

const jokeContainer = document.getElementById("joke-container");

jokes.forEach((joke) => {
  const jokeCard = document.createElement("div");
  jokeCard.classList.add("joke-card");

  const copyButton = document.createElement("button");
  const copyIcon = document.createElement("i");
  copyIcon.classList.add("fa-duotone", "fa-copy");
  copyButton.appendChild(copyIcon);

  const questionHeading = document.createElement("h3");
  questionHeading.textContent = joke.question;

  const answerParagraph = document.createElement("p");
  const quote = document.createElement("q");
  quote.textContent = joke.answer;
  answerParagraph.appendChild(quote);

  const shareButton = document.createElement("button");
  const shareIcon = document.createElement("i");
  shareIcon.classList.add("fa-duotone", "fa-share");
  shareButton.appendChild(shareIcon);

  // Agregar evento de clic al botón de copiar
  copyButton.addEventListener("click", () => {
    copyToClipboard(joke.question, joke.answer);
  });

  jokeCard.appendChild(copyButton);
  jokeCard.appendChild(questionHeading);
  jokeCard.appendChild(answerParagraph);
  jokeCard.appendChild(shareButton);

  jokeContainer.appendChild(jokeCard);
});

// Función para copiar el título y la respuesta al portapapeles
function copyToClipboard(question, answer) {
  const content = question + " " + answer;

  const textarea = document.createElement("textarea");
  textarea.value = content;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("¡Broma copiada al portapapeles!");
}

const memes = [
  { src: "images/meme1.jpeg", alt: "meme1" },
  { src: "images/meme2.jpg", alt: "meme2" },
  { src: "images/meme3.jfif", alt: "meme3" },
  { src: "images/meme4.jpg", alt: "meme4" },
  { src: "images/meme5.jfif", alt: "meme5" },
];

const memeContainer = document.getElementById("meme-container");

memes.forEach((meme) => {
  const memeCard = document.createElement("div");
  memeCard.classList.add("meme-card");

  const image = document.createElement("img");
  image.src = meme.src;
  image.alt = meme.alt;

  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Descargar";

  const shareButton = document.createElement("button");
  const shareIcon = document.createElement("i");
  shareIcon.classList.add("fa-duotone", "fa-share");
  shareButton.appendChild(shareIcon);

  memeCard.appendChild(image);
  memeCard.appendChild(downloadButton);
  memeCard.appendChild(shareButton);

  memeContainer.appendChild(memeCard);
});
