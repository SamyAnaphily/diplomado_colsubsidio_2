//la funcion es la ue realiza la tarea se coloca con una condicional que va en parentecis//
function card2(value) {
//let es la ue declara la variable(i) es algo ue se le da un valor, el = a es el valor ue le doy a la variable //
    let i = 0

    while (i < value) {

             
              const card = document.getElementById("cards");

             card.setAttribute("class", "card")


                    const div = document.createElement("div")
                    const img = document.createElement("img");
                    const h5 = document.createElement('h5');
                    const p = document.createElement('p')
                    const a = document.createElement('a')

                    h5.textContent = "Zapatos para Dama"
                    p.textContent = "Negros"
                    a.textContent = "Comprar"

                    div.setAttribute("class", "style", "card-body", "width: 18rem;")
                    h5.setAttribute("class", "card-tittle")
                    p.setAttribute("class", "card-text")
                    a.setAttribute("class", "btn btn-primary")
                    img.setAttribute("src", "./img/imagen1.jpg")



                    card.appendChild(div)
                    div.appendChild(img)
                    div.appendChild(h5)
                    div.appendChild(p)
                    div.appendChild(a)
              i++
            }

    }
    
    card2(2)         
