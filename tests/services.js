const axios = require('axios');
const url = `https://swapi.dev/api/people`;
 
async function getPeople (name) {
    
    const URL = `${url}/?search=${name}&format=json`;

    try{
        const response = await axios.get(URL);

        return response.data.results.map(mapearPessoas);
        
    }catch(error){
        console.log(error);
    }
}


function mapearPessoas(item){
  return {
    nome:item.name,
    peso:item.mass,
  }
}

module.exports ={ getPeople };