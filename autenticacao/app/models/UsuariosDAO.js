var crypto = require("crypto");
var ObjectID = require("mongodb").ObjectID;
function UsuariosDAO(connection){
	this._connection = connection();
	
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.open( function(err, mongoclient){
		console.log(usuario);
		mongoclient.collection("usuarios", function(err, collection){
			
			var senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha = senha_criptografada;
			collection.insert(usuario);
			mongoclient.close();
			
			if(err != null){
				return err;
			} else {
				return null;
			}
			

		});
	});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			var senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");
			usuario.senha = senha_criptografada;
			collection.find(usuario).toArray(function(err, result){
				console.log(usuario);
				if(result[0] != undefined){
					req.session.autorizado = true;
					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
					
				} 
				if(req.session.autorizado){
					res.redirect('painel')
					
				} else {
					res.render('index', {validacao: {},dadosForm: usuario})
				}
			});

			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.consultarUsuarios = function(req, res){
	
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			
			collection.find().toArray(function(err, result){
				
				res.render('cadastro', {validacao: {}, usuarios: result});
				
			});
			
			mongoclient.close();
			
		});
	});
}

UsuariosDAO.prototype.remover = function(_id,res){
	
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			
			collection.remove(
				{_id : ObjectID(_id)},
				function(err, result){
					res.redirect('cadastro');
					mongoclient.close();
				}
			);
			
			
			
		});
	});
}

module.exports = function(){
	return UsuariosDAO;
}