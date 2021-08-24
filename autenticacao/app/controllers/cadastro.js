module.exports.cadastro = function (application, req, res){
	const connection = application.config.dbConnection;
	const UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	console.log(req.session.perfil);
	if(req.session.perfil == 'A'){
		UsuariosDAO.consultarUsuarios(req,res);
	} else {
		res.render('index',{msg: 'A'});
	}
	
	

	
}

module.exports.cadastrar = function( application,req, res){

	let dadosForm = req.body;
	const connection = application.config.dbConnection;
	const UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	
	erro = UsuariosDAO.inserirUsuario(dadosForm);
	
	 if(erro != null){
	 	console.log(erro);
	 } else{
		
	 	res.redirect('cadastro');
	 }


	
}

module.exports.remover = function( application,req, res){

	let urlQuery = req.query;
	
	const connection = application.config.dbConnection;
	const UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	let _id = urlQuery.id_user;
	UsuariosDAO.remover(_id,res);
	
}