module.exports = function(application){
	application.get('/painel', function(req, res){
		application.app.controllers.painel.painel(application, req, res);
	});
	
}