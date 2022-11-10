const cards=
[
  {
      "title": "MARVEL COLLECTION",
      "content": "Capitain Carter",
      "buton": "Comprar",
      "imagen": "/Imagenes/Avengers_01.jpg"
  },
  {
      "title": "DISNEY COLLECTION",
      "content": "Cinderella",
      "buton": "Comprar",
      "imagen": "./Imagenes/Disney_01.jpg"
  },
  {
      "title": "HARRY POTTER COLLECTION",
      "content": "Harry Poter",
      "buton": "Comprar",
      "imagen": "./Imagenes/Harry_potter_01.JPG"
  },
  {
      "title": "THE BOYS COLLECTION",
      "content": "Hughie",
      "buton": "Comprar",
      "imagen": "./Imagenes/The_boys_01.jpg"
  },
  {
      "title": "THE BOYS COLLECTION",
      "content": "Hughie 2",
      "buton": "Comprar",
      "imagen": "./Imagenes/The_boys_01.jpg"
  },
  {
      "title": "CARTOON NETWORK COLLECTION",
      "content": "Jhonny Bravo",
      "buton": "Comprar",
      "imagen": "./Imagenes/Cartoon_network_01.JPG"
  }
]
   
   //la funcion es la ue realiza la tarea se coloca con una condicional que va en parentecis//
function card2({title,content,buton,imagen}) {
//let es la ue declara la variable(i) es algo ue se le da un valor, el = a es el valor ue le doy a la variable //

  //el getElementByIdes el que devuelve la referencia del i o  el html para llamarlos//
  const card = document.getElementById("cards");


  const tarjeta = document.createElement("div")
  const body = document.createElement("div")
  const img = document.createElement("img");
  const h5 = document.createElement('h5');
  const p = document.createElement('p')
  const a = document.createElement('a')

  h5.textContent = title
  p.textContent = content
  a.textContent = buton

  tarjeta.setAttribute("class","card")
  tarjeta.setAttribute("style", "width: 18rem;")
  body.setAttribute("class", "card-body")
  h5.setAttribute("class", "card-tittle")
  p.setAttribute("class", "card-text")
  a.setAttribute("class", "btn btn-primary")
  img.setAttribute("src", imagen)



  card.appendChild(tarjeta)
  tarjeta.appendChild(img)
  tarjeta.appendChild(body)
  body.appendChild(h5)
  body.appendChild(p)
  body.appendChild(a)
  


}
    
cards.forEach(elemento => card2(elemento));