import $ from "jquery";
import Chart from 'chart.js';
import {getValues, chartView} from './index.js';
import statInc from './statistic.js';

export default function getDDOResult() {
	let ddoResult = getValues('.golddo__button input:even');

	let hNature = 0,
		hTech 	= 0,
		hHuman 	= 0,
		hSign 	= 0,
		hArt 	= 0;

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
		hArt,
		hSign,
		hHuman
	];

	statInc('statTestDDO');

	let ddoObj = {
		hNature: hNature,
		hTech: hTech,
		hArt: hArt,
		hSign: hSign,
		hHuman: hHuman
	}

	if(ddoObj.hNature >= 6) {
		statInc('statTestDDOHumN');
	} else if(ddoObj.hTech >= 6) {
		statInc('statTestDDOHumT');
	} else if(ddoObj.hArt >= 6) {
		statInc('statTestDDOHumA');
	} else if(ddoObj.hSign >= 6) {
		statInc('statTestDDOHumS');
	} else if(ddoObj.hHuman >= 6) {
		statInc('statTestDDOHumH');
	}

	let ctxDDO = document.querySelector('#ddoChart').getContext('2d');
	
	let chartDDO = new Chart(ctxDDO, {
		type: 'radar',
		data: {
	        labels: [
		        'Человек-природа', 
		        'Человек-техника', 
		        'Человек-художественный образ',
		        'Человек-знаковая система', 
		        'Человек-человек'
		    ],
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0.5)',
	            borderColor: 'rgb(0, 55, 161)',
	            data: ddoArray
	        }]
	    },
	    options: {
	    	title: {
	    		display: true,
        		text: 'Результаты теста',
        		fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
        		color: '#000',
        		fontSize: 28,
        		padding: 30
	    	},
	    	tooltips: {
	    		enabled: false
	    	},
	    	legend: {
	    		display: false
	    	},
			scale: {
		        ticks: {
		            suggestedMin: 0,
		            suggestedMax: 8,
		            step: 8
		        },
		        pointLabels: {
		        	fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
		        	fontSize: 16,
		        	callback: function(value, index) {
		        		return value + ` (${ddoArray[index]})`;
		        	}
		        }
		    },
	    }	
	});

	chartView(chartDDO, '#ddoChart');

	window.addEventListener('resize', function() {
		chartView(chartDDO, '#ddoChart');
	});
}