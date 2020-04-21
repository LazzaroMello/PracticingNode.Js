const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'User:click';

meuEmissor.on(nomeEvento,(click)=>{
    console.log('Um usuário clicou', click);
})  

const stdin = process.openStdin();
// stdin.addListener('data',(value)=>{
//     console.log(`Você digitou: ${value.toString().trim()}`);
// });
 
function main(){
//promises esperar ser resolvida apenas uma vez, não espera mudanças como o evento: Ações continuas;
    return new Promise((resolve,reject)=>{
        stdin.addListener('data',(value)=>{
            resolve(value.toString().trim());
        }); 
    })

};

main()
    .then((resultado)=>{
        console.log('resultado:',resultado);
    });

// meuEmissor.emit(nomeEvento,'Na barra de rolagem');
 
// let counter  = 0;
// setInterval(() => {
//     meuEmissor.emit(nomeEvento,'No deletar '+(counter++));
// }, 1000);