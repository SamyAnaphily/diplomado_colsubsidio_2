const cards=
[
  {
      "title": "Card 1",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen2.jpg"
  },
  {
      "title": "Card 2",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen3.jpg"
  },
  {
      "title": "Card 3",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen1.jpg"
  },
  {
      "title": "Card 4",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen2.jpg"
  },
  {
      "title": "Card 5",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen3.jpg"
  },
  {
      "title": "Card 6",
      "content": "Este es el texto que debe observarse en el card-text",
      "buton": "Pulsame",
      "imagen": "./img/imagen2.jpg"
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
  body.setAttribute("class", "card-body", "style", "width: 18rem;")
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
 
