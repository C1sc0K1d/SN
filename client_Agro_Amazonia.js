function onSubmit() {
	
	var mandatoryMkt = 'cartao_de_visita,uniforme';
	
	var mandatoryFacilities = 'carro,celular';
	
    var mandatoryCount = 1;
	
	var taMarcadoMkt = ('mkt,');
	var marcarMkt = 1;
	
	var marcouMkt = forceMandatoryCheckboxes(taMarcadoMkt, marcarMkt); 
	
	var taMarcadoFacilit = ('facilities,');
	var marcarFacilit = 1;
	
	var marcouFacilit = forceMandatoryCheckboxes(taMarcadoFacilit, marcarFacilit);
	
	 var message;
	
	if(marcouMkt){
		
		message = 'You must select at least ' + mandatoryCount + ' options from the MKT.';
		
		var passed = forceMandatoryCheckboxes(mandatoryMkt, mandatoryCount);
		if (!passed) {
			//Abort the submit
			g_form.addErrorMessage(message);
			return false;
		}
	}
	if(marcouFacilit){

		message = 'You must select at least ' + mandatoryCount + ' options from the Facilities.';
		var passou = forceMandatoryCheckboxes(mandatoryFacilities, mandatoryCount);
		if (!passou) {
			//Abort the submit
			g_form.addErrorMessage(message);
			return false;
		}
	}
}

function forceMandatoryCheckboxes(mandatory, count) {
    //Split the mandatory variable names into an array
    mandatory = mandatory.split(',');
    var answer = false;
    var varFound = false;
    var numTrue = 0;
    //Check each variable in the array
    for (var x = 0; x < mandatory.length; x++) {
        //Check to see if variable exists
        if (g_form.hasField(mandatory[x])) {
            varFound = true;
            //Check to see if variable is set to 'true'
            if (g_form.getValue(mandatory[x]) == 'true') {
                numTrue ++;
                //Exit the loop if we have reached required number of 'true'
                if (numTrue >= count) {
                    answer = true;
                    break;
                }
            }
        }
    }
    //If we didn't find any of the variables allow the submit
    if (varFound == false) {
        answer = true;
    }
    //Return true or false
    return answer;
}
