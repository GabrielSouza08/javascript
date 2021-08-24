module.exports.index = function(application, req, res){
	if(req.session.autorizado == true){
		res.redirect('painel');
	} else{
		res.render('index', {msg: {}});
	}
	
}

module.exports.autenticar = function(application, req, res){
	let dadosForm = req.body;

	
	 req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
	 req.assert('senha', 'Senha não pode ser vazio').notEmpty();
	 let erros = req.validationErrors();

	
	console.log(dobro(2))
	 if(erros){
	 	res.render('index', {msg: 'B'});
	 	return;
	 }
	
	const connection = application.config.dbConnection;
	const UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	
	UsuariosDAO.autenticar(dadosForm, req, res);
	
}