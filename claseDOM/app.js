const lista = document.getElementById('lista')
//console.log(lista)//
const arrayElement = ['primer elemento','segundo','tercero']

arrayElement.forEach(item => {
    console.log(item)
    const  elelista = document.createElement('li')
    elelista.textContent = item
    lista.appendChild(elelista);
})
arrayElement.forEach(zapatos=>{
         
})
const pets=[
    {
        id:1,
        name:"Negro",
        img:"./img/imagen1.jpg",
    },
    {
        id:2,
        name:"Blanco",
        img:"./img/imagen2.jpg",
    },
    {
        id:3,
        name:"Tipo Tennis",
        img:"./img/imagen3.jpg",
    }
];
    
let card = document.getElementById("card-template");
 pets.map((x) =>{
    card.innerHTML += `<div class="col">
    <div class="card">
      <img src="${x.img}" class="card-img-top" alt="${x.name}">
      <div class="card-body">
        <h5 class="card-title text-center text-primary">${x.name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
  </div> 
  `;
 })