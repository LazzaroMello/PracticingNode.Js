//A funcao getAdress como callback, passa a ser assíncrona pelo uso do utils
const utils = require('util');
const getAdressAsync = utils.promisify(getAdress);

function getUser() {
	//Deu problema chama reject
	//deu certo chama resolve
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

//Para manipular o sucesso usamos a funcao .then
//Para manipular erro usamos funcao .catch

const getUserPromise = getUser();

getUserPromise
	.then(user => {
		return getPhone(user._id)
			.then(phone => {
				return {
					usuario: {
						nome: user.nome,
						_id: user._id,
					},
					telefone: phone
				}
			})

	})
	.then((resultado) => {
		const adress = getAdressAsync(resultado.usuario._id);
		return adress
			.then((result) => {
				return {
					usuario: resultado.usuario,
					telefone: resultado.telefone,
					endereco: result
				}
			})
	})
	.then(user => {
		const data = {

			Nome: user.usuario.nome,
			Endereço: `${user.endereco.logadrouro},${user.endereco.numero}`,
			Telefone: `${(user.telefone.ddd)} ${user.telefone.telefone}`

		}
		console.log(JSON.stringify(data));

	}).catch(err => {
		console.log('Erro:', err)
	})

//output
// 	{
// 		"Nome": "Jhon",
// 		"Endereço": "Rua c,293",
// 		"Telefone": "11 12342342"
// 	}