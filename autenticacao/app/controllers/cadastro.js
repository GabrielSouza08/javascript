module.exports.cadastro = function (application, req, res){
	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	
	UsuariosDAO.consultarUsuarios(req,res);
	

	
}

module.exports.cadastrar = function( application,req, res){

	let dadosForm = req.body;
	let connection = application.config.dbConnection;
	let UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	
	erro = UsuariosDAO.inserirUsuario(dadosForm);
	
	 if(erro != null){
	 	console.log(erro);
	 } else{
		
	 	res.redirect('cadastro');
	 }


	
}

module.exports.remover = function( application,req, res){

	let urlQuery = req.query;
	console.log(urlQuery);
	let connection = application.config.dbConnection;
	let UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	let _id = urlQuery.id_user;
	UsuariosDAO.remover(_id,res);
	
}