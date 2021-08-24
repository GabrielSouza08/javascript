/* importar o mongodb */
const Db = require('mongodb').Db;
const Server = require('mongodb').Server;

const connMongoDB = function(){
	
	const db = new Db(
		'crm',
		new Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);

	return db;
}

module.exports = () => connMongoDB;
