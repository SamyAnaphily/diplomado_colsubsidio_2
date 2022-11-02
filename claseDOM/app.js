const lista = document.getElementById('lista')
//console.log(lista)//
const arrayElement = ['primer elemento','segundo','tercero']

arrayElement.forEach(item => {
    console.log(item)
    const li = document.createElement('li')
    li.textContent = item
    lista.appendChild(li)
})
/*arrayElement.forEach(item =>{

})*/

