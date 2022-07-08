//RECETA PARA CONSUMIR APIS CON JS

//1. PA' ONDE VAS
//LA URI DEL SERVICIO
const URI='https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US'

//2. A HACER QUE OME?
//CONFIGURO LA PETICION
const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQBIH69hCqZ7ePp-zv2kEWN0BT6H1fayfrVaNTOMn038QThgDaCPhTxNSrTGhVmHQYihXCYlG2kWSF3Wj_Q9jgSkhNhfg8VvxjRX4XmzCpnOGJUyIvuhAfjWw6UtibkQElOx1lak_5CtU31RIgb4mUQdr7a5afPP8MChJeG-eQwPSK-vjL4'
    }
}

//3. ARRANQUE PS MIJO
//CONSUMA EL API

//promesa (funcion asincrona)
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //aseguro del formato de respuesta
})
.then(function(respuesta){
    console.log(respuesta)//objeto
    console.log(respuesta.tracks)//arreglo
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
    })
}) //hago lo que quiera con la respuesta
.catch(function(respuesta){
    console.log(respuesta)
})