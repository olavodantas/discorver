function toggleModel() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Olavo.jpg")
  } else {
    //se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "assets/03.png")
  }
}
