const {getPeople} = require('./services');

Array.prototype.myFilter = function (callback) {

  let arrayFiltrado =[];

  for(let value of this){
    
    const result = callback(value);
  
    if(result) arrayFiltrado.push(value);
     
  }
  return arrayFiltrado;

}

async function main(){
  try {
    
    const { results } = await getPeople('a');
    
    const names = name => name.name;
    const justNames = results.map(names);

    const larsInNames = item => (item.toLowerCase().includes('lars')) ;
    const justLarsFamily = justNames.myFilter(larsInNames);

    console.log(justLarsFamily);
    
    /*
      output:
          [ 'Owen Lars', 'Beru Whitesun lars' ]
    */

  } catch (error) {
    console.error('Erro: ',error);
  }
}
main();