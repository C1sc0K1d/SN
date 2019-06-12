var GetUserData = Class.create();
GetUserData.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getData : function() {
         // Instancia objeto vazio
		var obj = {};

		// Consulta a tabela sys_user
		var gr = new GlideRecord("sys_user");

		// Pega o ID do usuário atual
		gr.addEncodedQuery("sys_id="+gs.getUserID());

                // Executa a Query
		gr.query();

                // Verifica se encontrou algum dado
		if(gr.next()) {
                        // Coloca os dados dentro do objeto
			obj.cpf = gr.u_cpf.toString();
			obj.numero_da_cnh = gr.u_cnh.toString();
			obj.data_de_nascimento = gr.u_nascimento.toString();
			
                        // Stringify
			return JSON.stringify(obj);
		} else {
                        // Se não encontrar o registro
			return gs.info("Not find");
		}

	},

	type: 'GetUserData'
});
