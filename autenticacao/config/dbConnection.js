/* importar o mongodb */
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

var connMongoDB = function(){
	
	var db = new Db(
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

module.exports = function(){
	return connMongoDB;
}