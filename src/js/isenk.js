import $ from "jquery";
import {getValues} from './index.js';

export default function getIsenkResult() {
	let isenkValues = getValues('.isenk__button--yes input');

	let extraversionPoints 	= 0,
		neuroticismPoints 	= 0,
		liePoints 			= 0;

	let isExtrovert = false,
		isStable = false;

	if(isenkValues[1]) {
		extraversionPoints++;
	}
	if(isenkValues[2]) {
		neuroticismPoints++;
	}
	if(isenkValues[3]) {
		extraversionPoints++;
	}
	if(isenkValues[4]) {
		neuroticismPoints++;
	}
	if(!isenkValues[5]) {
		extraversionPoints++;
	}
	if(isenkValues[7]) {
		neuroticismPoints++;
	}
	if(isenkValues[8]) {
		extraversionPoints++;
	}
	if(isenkValues[9]) {
		neuroticismPoints++;
	}
	if(isenkValues[10]) {
		extraversionPoints++;
	}
	if(isenkValues[11]) {
		neuroticismPoints++;
	}
	if(isenkValues[13]) {
		extraversionPoints++;
	}
	if(isenkValues[14]) {
		neuroticismPoints++;
	}
	if(!isenkValues[15]) {
		extraversionPoints++;
	}
	if(isenkValues[16]) {
		neuroticismPoints++;
	}
	if(isenkValues[17]) {
		extraversionPoints++;
	}
	if(isenkValues[19]) {
		neuroticismPoints++;
	}
	if(!isenkValues[20]) {
		extraversionPoints++;
	}
	if(isenkValues[21]) {
		neuroticismPoints++;
	}
	if(isenkValues[22]) {
		extraversionPoints++;
	}
	if(isenkValues[23]) {
		neuroticismPoints++;
	}
	if(isenkValues[25]) {
		extraversionPoints++;
	}
	if(isenkValues[26]) {
		neuroticismPoints++;
	}
	if(isenkValues[27]) {
		extraversionPoints++;
	}
	if(isenkValues[28]) {
		neuroticismPoints++;
	}
	if(!isenkValues[29]) {
		extraversionPoints++;
	}
	if(isenkValues[31]) {
		neuroticismPoints++;
	}
	if(!isenkValues[32]) {
		extraversionPoints++;
	}
	if(isenkValues[33]) {
		neuroticismPoints++;
	}
	if(!isenkValues[34]) {
		extraversionPoints++;
	}
	if(isenkValues[35]) {
		neuroticismPoints++;
	}
	if(!isenkValues[37]) {
		extraversionPoints++;
	}
	if(isenkValues[38]) {
		neuroticismPoints++;
	}
	if(isenkValues[39]) {
		extraversionPoints++;
	}
	if(isenkValues[40]) {
		neuroticismPoints++;
	}
	if(!isenkValues[41]) {
		extraversionPoints++;
	}
	if(isenkValues[43]) {
		neuroticismPoints++;
	}
	if(isenkValues[44]) {
		extraversionPoints++;
	}
	if(isenkValues[45]) {
		neuroticismPoints++;
	}
	if(isenkValues[46]) {
		extraversionPoints++;
	}
	if(isenkValues[47]) {
		neuroticismPoints++;
	}
	if(isenkValues[49]) {
		extraversionPoints++;
	}
	if(isenkValues[50]) {
		neuroticismPoints++;
	}
	if(!isenkValues[51]) {
		extraversionPoints++;
	}
	if(isenkValues[52]) {
		neuroticismPoints++;
	}
	if(isenkValues[53]) {
		extraversionPoints++;
	}
	if(isenkValues[55]) {
		neuroticismPoints++;
	}
	if(isenkValues[56]) {
		extraversionPoints++;
	}
	if(isenkValues[57]) {
		neuroticismPoints++;
	}

	if(extraversionPoints >= 11) {
		isExtrovert = true;
	}
	if(neuroticismPoints < 12) {
		isStable = true;
	}

	if((isExtrovert) && (isStable)) {
		$('.isenkResult__item--sanguine').show();
	} else if((!isExtrovert) && (isStable)) {
		$('.isenkResult__item--phlegmatic').show();
	} else if((!isExtrovert) && (!isStable)) {
		$('.isenkResult__item--melancholic').show();
	} else {
		$('.isenkResult__item--choleric').show();
	}
}