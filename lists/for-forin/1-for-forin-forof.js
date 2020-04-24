const service = require('./services');

async function main(){

    try{

        const data = await service.getPeople('a');
        const names = [];
        
        console.time('For');
            for(let i = 0; i<data.results.length-1;i++){
                const pessoa =data.results[i];
                names.push(pessoa.name);
            }
        console.timeEnd('For');

        console.time('ForIn');
            for(let i in data.results){
                const pessoa = data.results[i];
                names.push(pessoa.name);
            }
        console.timeEnd('ForIn');


        console.time('Forof');
            for (const pessoa of data.results) {
                names.push(pessoa.name);
            }
        console.timeEnd('Forof');

    }catch(error){
        console.error('Erro interno: ',error);
    }   

}
main();
 