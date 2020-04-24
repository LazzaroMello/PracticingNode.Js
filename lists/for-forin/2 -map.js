const service = require('./services');
//  
const thisValue = ()=>{
  console.log(this);
}
thisValue();

Array.prototype.meuMap = function (callback){

  const novoArrayMapeado = [];
  for (let i = 0; i < this.length-1; i++) {
    let result = callback(this[i],i);
    novoArrayMapeado.push(result);
  }
  return novoArrayMapeado;
}
async function main(){

    try{

        const {results} = await service.getPeople('a'); 
        const names = results.meuMap((pessoa,i)=>{
          return pessoa.name
        });
        console.log(names)

    }catch(error){
        console.error('Erro interno: ',error);
    }   

}
main();
 


 