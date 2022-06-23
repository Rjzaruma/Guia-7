
const listIMG=[{url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "camino"}, { url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "energia"}, { url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "papá"}]



let ejecutarCodigo = () => {
    //alert('Hola Mundo!')
    let elemento= document.getElementById("titulo1")
    elemento.textContent="Album de fotos"
    let texto= document.getElementsByClassName("text-muted")
    elemento=texto[1]
    elemento.innerHTML='<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'

    let etiq=document.getElementsByTagName("p")
    etiq[2].setAttribute("class","d-none")

    for(i in listIMG){
        let img = document.createElement("img")
        let iterable = document.getElementsByTagName("svg")[1]
        console.log(i)
        img.src = listIMG[i].url
        img.alt = listIMG[i].alt
        iterable.replaceWith(img)
    }
    

}
ejecutarCodigo()
