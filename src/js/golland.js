import $ from "jquery";
import Chart from 'chart.js';
import {getValues} from './index.js';

export default function getGollandResult() {
	let gollandResult = getValues('.golddo__button input:even');

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
		return Math.ceil((item / 14 * 100) / 10);
	});

	let ctxGolland = document.querySelector('#gollandChart').getContext('2d');
	
	let chartGolland = new Chart(ctxGolland, {
		type: 'radar',
		data: {
	        labels: [
		        'Реалистический тип', 
		        'Интеллектуальный тип', 
		        'Социальный тип', 
		        'Конвенциальный тип', 
		        'Предприимчивый тип', 
		        'Артистический тип'
	        ],
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0.5)',
	            borderColor: 'rgb(0, 55, 161)',
	            data: gollandArray
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
		            suggestedMax: 10,
		            step: 10
		        },
		        pointLabels: {
		        	fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
		        	fontSize: 16,
		        	callback: function(value, index, values) {
		        		return value + ` (${gollandArray[index]})`;
		        	}
		        }
		    },
	    }	
	});
}