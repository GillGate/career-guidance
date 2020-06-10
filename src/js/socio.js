import $ from "jquery";
import {getValues} from './index.js';
import statInc from './statistic.js';

export default function getSocioResult() {
	let socioResult = getValues('.socio__button input:even');

	let extraversionPoints 	= 0,
		introversionPoints 	= 0,
		rationalPoints 		= 0,
		irrationalPoints 	= 0,
		sensoricPoints 		= 0,
		intuitionPoints 	= 0,
		logicPoints 		= 0,
		ethicPoints 		= 0,
		initiativePoints 	= 0,
		terminalPoints		= 0;

	let firstLetter 	= '',
		secondLetter 	= '',
		thirdLetter 	= '',
		fourthLetter 	= '';

	if(socioResult[1]) {
		extraversionPoints++;
	} else {
		introversionPoints++;
	}
	if(socioResult[2]) {
		rationalPoints++;
	} else {
		irrationalPoints++;
	}
	if(socioResult[3]) {
		sensoricPoints++;
	} else {
		intuitionPoints++;
	}
	if(socioResult[4]) {
		logicPoints++;
	} else {
		ethicPoints++;
	}
	if(socioResult[5]) {
		initiativePoints++;
	} else {
		terminalPoints++;
	}
	if(socioResult[6]) {
		extraversionPoints++;
	} else {
		introversionPoints++;
	}
	if(socioResult[7]) {
		rationalPoints++;
	} else {
		irrationalPoints++;
	}
	if(socioResult[8]) {
		sensoricPoints++;
	} else {
		intuitionPoints++;
	}
	if(socioResult[9]) {
		logicPoints++;
	} else {
		ethicPoints++;
	}
	if(socioResult[10]) {
		initiativePoints++;
	} else {
		terminalPoints++;
	}
	if(socioResult[11]) {
		extraversionPoints++;
	} else {
		introversionPoints++;
	}
	if(socioResult[12]) {
		rationalPoints++;
	} else {
		irrationalPoints++;
	}
	if(socioResult[13]) {
		sensoricPoints++;
	} else {
		intuitionPoints++;
	}
	if(socioResult[14]) {
		logicPoints++;
	} else {
		ethicPoints++;
	}
	if(socioResult[15]) {
		initiativePoints++;
	} else {
		terminalPoints++;
	}
	if(socioResult[16]) {
		extraversionPoints++;
	} else {
		introversionPoints++;
	}
	if(socioResult[17]) {
		rationalPoints++;
	} else {
		irrationalPoints++;
	}
	if(socioResult[18]) {
		sensoricPoints++;
	} else {
		intuitionPoints++;
	}
	if(socioResult[19]) {
		logicPoints++;
	} else {
		ethicPoints++;
	}
	if(socioResult[20]) {
		initiativePoints++;
	} else {
		terminalPoints++;
	}
	if(socioResult[21]) {
		extraversionPoints++;
	} else {
		introversionPoints++;
	}
	if(socioResult[22]) {
		rationalPoints++;
	} else {
		irrationalPoints++;
	}
	if(socioResult[23]) {
		sensoricPoints++;
	} else {
		intuitionPoints++;
	}
	if(socioResult[24]) {
		logicPoints++;
	} else {
		ethicPoints++;
	}
	if(socioResult[25]) {
		initiativePoints++;
	} else {
		terminalPoints++;
	}

	if(introversionPoints > extraversionPoints) {
		firstLetter = 'i';
	} else {
		firstLetter = 'e';
	}
	if(irrationalPoints > rationalPoints) {
		secondLetter = 'i';
	} else {
		secondLetter = 'r';
	}
	if(ethicPoints > logicPoints) {
		thirdLetter = 'e';
	} else {
		thirdLetter = 'l';
	}
	if (intuitionPoints > sensoricPoints) {
		fourthLetter = 'i';
	} else {
		fourthLetter = 's';
	}

	let resultWord = firstLetter + secondLetter + thirdLetter + fourthLetter;
	
	$(`.testResult__item--${resultWord}`).show();

	statInc('statTestSocio');
	statInc(`statTestSocio--${resultWord}`);
}