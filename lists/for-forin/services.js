const axios = require('axios');
const url = `https://swapi.dev/api/people`;
 
async function getPeople (name) {
    
    const URL = `${url}/?search=${name}&format=json`;

    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(error){
        console.log(error);
    }

}
 
module.exports = {getPeople};