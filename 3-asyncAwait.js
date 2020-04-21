//A funcao getAdress como callback, passa a ser assíncrona pelo uso do utils
const utils = require('util');
const getAdressAsync = utils.promisify(getAdress);

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                _id: 1,
                nome: 'Jhon',
                dataNascimento: new Date().toDateString(),
            })
        }, 2000);
    })
}

function getPhone(userId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            return resolve({
                telefone: 12342342,
                ddd: 11,

            })

        }, 2000);
    })
}


function getAdress(userId, callback) {

    setTimeout(() => {

        return callback(undefined, {
            logadrouro: 'Rua c',
            numero: 293
        })

    }, 2000);
}

(async function main() {

    try {
        console.time("Tempo-promise");
        
        const user = await getUser();
        const result = await Promise.all([
            getPhone(user._id),
            getAdressAsync(user._id)
        ])

        const phone = result[0];
        const adress = result[1];
        

        console.log(`
            Name: ${user.nome},
            Phone: (${phone.ddd}) ${phone.telefone},
            Adress: ${adress.logadrouro} ${adress.numero}
        `)
        console.timeEnd("Tempo-promise");

    } catch (error) {
        console.error('An error has occurred! ', error);
    }

})()