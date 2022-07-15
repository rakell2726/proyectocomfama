//CONSUMIR UN SERVICIO (POST)

const URI='https://accounts.spotify.com/api/token'

const DATO1="client_id=f7a6a05cf71a46c9bc04f337e794c67b"
const DATO2="client_secret=2b42419ea2b14186b297547e08fc5773"
const DATO3="grant_type=client_credentials"

const PETICION={
    method:"POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:DATO1+'&'+DATO2+'&'+DATO3
}

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //Armando el TOKEN
    const TOKEN=respuesta.token_type+" "+respuesta.access_token
    console.log(TOKEN)
    
})
.catch(function(respuesta){
    console.log(respuesta)
})

