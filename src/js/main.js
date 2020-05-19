$(function() {
	$('.test__item:first').addClass('test__item--active');
	$('.test__item:last').addClass('test__item--last');

	$('.test').on('click', '.test__button', function() {
		let $testItem = $(this).closest('.test__item');
		$testItem.removeClass('test__item--active');
		$testItem.next().addClass('test__item--active');

		if($testItem.hasClass('test__item--last')) {
			getResult( $(this).closest('.test') );
		}
	});

	function getValues(selector) {
		let values = $(selector);
		let arrayValues = [];

		for(let i = 0; i < values.length; i++) {
			arrayValues[i+1] = values[i].checked;
		}

		return arrayValues;
	}

	function getResult(test) {
		if (test.hasClass('isenk')) {
			getIsenkResult();
		}
		if (test.hasClass('golland')) {
			getGollandResult();
		}
		if (test.hasClass('ddo')) {
			getDDOResult();
		}
		if (test.hasClass('socio')) {
			getSocioResult();
		}
	}

	function getIsenkResult() {
		let isenkValues = getValues('.isenk__button--yes input');

		let extraversionPoints 	= 0;
		let neuroticismPoints 	= 0;
		let liePoints 			= 0;

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
		if(isenkValues[6]) {
			liePoints++;
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
		if(!isenkValues[12]) {
			liePoints++;
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
		if(!isenkValues[18]) {
			liePoints++;
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
		if(isenkValues[24]) {
			liePoints++;
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
		if(!isenkValues[30]) {
			liePoints++;
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
		if(isenkValues[36]) {
			liePoints++;
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
		if(!isenkValues[42]) {
			liePoints++;
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
		if(!isenkValues[48]) {
			liePoints++;
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
		if(!isenkValues[54]) {
			liePoints++;
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

		if(extraversionPoints < 5) {
			console.log('грубокий интроверт');
		} else if(extraversionPoints < 9) {
			console.log('интроверт');
		} else if(extraversionPoints < 12) {
			console.log('склонность к интроверсии');
		} else if(extraversionPoints = 12) {
			console.log('амбиаверт');
		} else if(extraversionPoints > 12) {
			console.log('склонность к экстраверсии');
		} else if(extraversionPoints > 15) {
			console.log('экстраверт');
		} else {
			console.log('яркий экстраверт');
		}

		if(neuroticismPoints < 9) {
			console.log('низкий уровень нейротизма');
		} else if(neuroticismPoints > 9 && neuroticismPoints < 13) {
			console.log('среднее значение');
		} else if(extraversionPoints > 13) {
			console.log('высокий уровень нейротизма');
		} else {
			console.log('очень высокий уровень нейротизма');
		}

		if(liePoints < 4) {
			console.log('норма');
		} else {
			console.log('неискренность в ответах');
		}
	}

	function getGollandResult() {
		let gollandResult = getValues('.golland__button input:even');

		let realPoints 				= 0;
		let intellectualPoints 		= 0;
		let socialPoints 			= 0;
		let conventionalPoints 		= 0;
		let entrepreneurialPoints	= 0;
		let artisticPoints 			= 0;

		if(gollandResult[1]) {
			realPoints++;
		} else {
			intellectualPoints++;
		}
		if(gollandResult[2]){
			realPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[3]){
			realPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[4]){
			realPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[5]){
			realPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[6]){
			intellectualPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[7]){
			intellectualPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[8]){
			intellectualPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[9]){
			intellectualPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[10]){
			socialPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[11]){
			socialPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[12]){
			socialPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[13]){
			conventionalPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[14]){
			conventionalPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[15]){
			entrepreneurialPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[16]){
			realPoints++;
		} else {
			intellectualPoints++;
		}
		if(gollandResult[17]){
			realPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[18]){
			realPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[19]){
			realPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[20]){
			intellectualPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[21]){
			realPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[22]){
			intellectualPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[23]){
			intellectualPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[24]){
			intellectualPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[25]){
			socialPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[26]){
			socialPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[27]){
			socialPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[28]){
			conventionalPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[29]){
			conventionalPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[30]){
			entrepreneurialPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[31]){
			realPoints++;
		} else {
			intellectualPoints++;
		}
		if(gollandResult[32]){
			realPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[33]){
			realPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[34]){
			realPoints++;
		} else {
			artisticPoints++;
		}
		if(gollandResult[35]){
			intellectualPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[36]){
			intellectualPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[37]){
			intellectualPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[38]){
			socialPoints++;
		} else {
			conventionalPoints++;
		}
		if(gollandResult[39]){
			socialPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[40]){
			conventionalPoints++;
		} else {
			entrepreneurialPoints++;
		}
		if(gollandResult[41]){
			artisticPoints++;
		} else {
			socialPoints++;
		}
		if(gollandResult[42]){
			conventionalPoints++;
		} else {
			artisticPoints++;
		}

		let pointsArray = [
			realPoints, 
			intellectualPoints, 
			socialPoints, 
			conventionalPoints, 
			entrepreneurialPoints, 
			artisticPoints
		];

		let gollandArray = pointsArray.map(function(item) {
			return Math.round(item / 14 * 100);
		});

		console.log(gollandArray);
	}

	function getDDOResult() {
		let ddoResult = getValues('ddo__button input:even');

		let hNature = 0;
		let hTech 	= 0;
		let hHuman 	= 0;
		let hSign 	= 0;
		let hArt 	= 0;

		if(ddoResult[1]){
			hNature++;
		} else {
			hTech++;
		}
		if(ddoResult[2]){
			hHuman++;
		} else {
			hSign++;
		}
		if(ddoResult[3]){
			hArt++;
		} else {
			hNature++;
		}
		if(ddoResult[4]){
			hTech++;
		} else {
			hHuman++;
		}
		if(ddoResult[5]){
			hSign++;
		} else {
			hArt++;
		}
		if(ddoResult[6]){
			hNature++;
		} else {
			hHuman++;
		}
		if(ddoResult[7]){
			hArt++;
		} else {
			hTech++;
		}
		if(ddoResult[8]){
			hHuman++;
		} else {
			hArt++;
		}
		if(ddoResult[9]){
			hTech++;
		} else {
			hSign++;
		}
		if(ddoResult[10]){
			hNature++;
		} else {
			hSign++;
		}
		if(ddoResult[11]){
			hNature++;
		} else {
			hTech++;
		}
		if(ddoResult[12]){
			hHuman++;
		} else {
			hSign++;
		}
		if(ddoResult[13]){
			hArt++;
		} else {
			hNature++;
		}
		if(ddoResult[14]){
			hTech++;
		} else {
			hHuman++;
		}
		if(ddoResult[15]){
			hSign++;
		} else {
			hArt++;
		}
		if(ddoResult[16]){
			hNature++;
		} else {
			hHuman++;
		}
		if(ddoResult[17]){
			hArt++;
		} else {
			hTech++;
		}
		if(ddoResult[18]){
			hHuman++;
		} else {
			hArt++;
		}
		if(ddoResult[19]){
			hTech++;
		} else {
			hSign++;
		}
		if(ddoResult[20]){
			hNature++;
		} else {
			hSign++;
		}

		let ddoArray = [
			hNature,
			hTech,
			hHuman,
			hSign,
			hArt
		];

		console.log(ddoArray);
	}

	function getSocioResult() {
		let socioResult = getValues('socio__button input:even');

		let extraversionPoints 	= 0;
		let introversionPoints 	= 0;
		let rationalPoints 		= 0;
		let irrationalPoints 	= 0;
		let sensoricPoints 		= 0;
		let intuitionPoints 	= 0;
		let logicPoints 		= 0;
		let ethicPoints 		= 0;
		let initiativePoints 	= 0;
		let terminalPoints		= 0;

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
	}
});