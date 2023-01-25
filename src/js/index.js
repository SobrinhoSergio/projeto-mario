const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fechar-modal")
const pararVoltarVideo = document.getElementById("video")
// pegar um elemento pelo id

botaoTrailer.addEventListener("click", abrir)
fecharModal.addEventListener("click", fechar)

function abrir() {
    modal.classList.add("aberto")
    // classList é uma propriedade (pode add, remover, etc)
}

function fechar() {
    modal.classList.remove("aberto")
    pararVoltarVideo.setAttribute("src", "")
    // parar o video sem a API do ytb | setar um atributo ("atributo", "valor")
    pararVoltarVideo.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
}

// ao invés de usar add and remove pode usar toggle (alternar)