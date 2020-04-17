//Objetivos:
    //Obter um usuario;
    //Obter o número de telefone do  usuario a partir de seu _id;
    //Obeter o endereço pelo id;

function getUser(callback) {
    setTimeout(() => {
        return callback(undefined, {
            _id: 1,
            nome: 'Jhon',
            dataNascimento: new Date().toDateString(),
        })

    }, 2000);

}

function getPhone(userId, callback) {

    setTimeout(() => {

        return callback(undefined, {
            telefone: 707070,
            ddd: 11,
        })

    }, 2000);

}

function getAdress(userId, callback) {

    setTimeout(() => {

        return callback(undefined, {
            logadrouro: 'Rua c',
            numero: 293
        })

    }, 2000);

}


getUser((error, user) => {

    if (error) {
        console.error('Erro em usuario', error);
    }

    getPhone(user._id, (err, telefone) => {
        if (err) {
            console.error('Erro em telefone', error);
        }

        getAdress(user._id, (err2, adress) => {
            if (err2) {
                console.error('Erro em endereço', error);
            }

            console.log(
                `
            Name:${user.nome},
            Adress:${adress.logadrouro}, ${adress.numero},
            whatsapp: (${telefone.ddd}) ${telefone.telefone}
        `);
        })
    })
})

// output:
//   Name:Jhon,
//   Adress:Rua c,293,
//   whatsapp: (11) 707070      


