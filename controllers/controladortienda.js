let productos=[

    {
        nombre: "aretsol",
        precio: 25000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are1.1.jpg?alt=media&token=3384f6f0-44e6-4bd2-bded-7bccc771f86a','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are1.jpg?alt=media&token=2d6eb8b9-568a-4287-b219-d6a0698462e6']
    },
    {
        nombre: "aretsol",
        precio: 35000,
        fotos:[ 'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are2.jpg?alt=media&token=ad41bf4d-5f1a-4cb9-a324-62a7ca5a8e40','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are2.1.jpg?alt=media&token=612e7c7f-2c7e-4740-a18e-d101374e1676']

    },
    {
        nombre: "aretsol",
        precio: 35000,
        fotos:[ 'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are3.jpg?alt=media&token=37051790-2c68-473a-add5-c69a8f6d754f','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are3.2.jpg?alt=media&token=56ab592c-5b97-419b-98d0-ba6194abb6d1']

    },
    {
        nombre: "aretsol",
        precio: 35000,
        fotos:[ 'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are4.jpg?alt=media&token=5ea9001d-a92c-48da-b165-4e3f93bd91db','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are4.2.jpg?alt=media&token=b3833bb4-4385-440c-8ad4-a82b0c9a1a41']

    },
    {
        nombre: "aretsol",
        precio: 35000,
        fotos:[ 'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are5.jpg?alt=media&token=ba779814-e093-4730-8d06-ae05afeb96da','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-5ba55.appspot.com/o/are5.2.jpg?alt=media&token=39b5153f-bb1c-451d-9077-c6bf41412794']

    }

]
let fila=document.getElementById("fila")
//recorer el arreglo
productos.forEach(function (producto) {

    let columna=document.createElement('div')
    columna.classList.add('col')

    let tarjeta=document.createElement('div')
    tarjeta.classList.add("card","h-100","text-center")

    let foto=document.createElement('img')
    foto.classList.add("img-fluid","w-100","h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement('h3')
    nombre.textContent=producto.nombre

    let precio=document.createElement('h2')
    precio.classList.add("fw-bold")
    precio.textContent='$' +producto.precio

    //detectando eventos
    foto.addEventListener("mouseover",function () {
        foto.src=producto.fotos[1]
    })
    
    foto.addEventListener("mouseleave",function () {
        foto.src=producto.fotos[0]
    })


    //padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})














