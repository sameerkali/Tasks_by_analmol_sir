console.log("sameer")

axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
.then(response =>{
    console.log(response.data);
},err=>{
    console.log(err)
})