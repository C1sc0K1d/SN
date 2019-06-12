function onLoad() {

	var ga = new GlideAjax('GetUserData');
	ga.addParam('sysparm_name', 'getData');

	ga.getXML(HelloWorldParse);

	function HelloWorldParse(response) {
		
		var answer = response.responseXML.documentElement.getAttribute("answer");
		
		var obj = JSON.parse(answer);
		
		g_form.setValue("numero_da_cnh", obj.numero_da_cnh);
		g_form.setValue("cpf", obj.cpf);
		g_form.setValue("data_de_nascimento", obj.data_de_nascimento);
	}

}
