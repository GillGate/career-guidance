import $ from "jquery";
import Chart from 'chart.js';

export default function getIndexCharts() {
	let ctxIsenkStat = document.querySelector('#isenkStatisitc').getContext('2d');
	let ctxGollandStat = document.querySelector('#gollandStatisitc').getContext('2d');
	let ctxDDOStat = document.querySelector('#ddoStatisitc').getContext('2d');
	let ctxSocioStat = document.querySelector('#socioStatisitc').getContext('2d');

	let isenkArray 		= [5, 2, 3, 2, 2, 1, 3];
	let gollandArray 	= [4, 1, 2, 1, 3, 1, 3];
	let ddoArray 		= [2, 0, 1, 2, 0, 2, 3];
	let socioArray 		= [3, 4, 2, 1, 1, 0, 3];

	let currentDay 	= new Date();
	let dateArray 	= [currentDay.getDate()];

	for(let i = 0; i < isenkArray.length - 1; i++) {
		currentDay.setDate(currentDay.getDate() - 1);
		dateArray.push(currentDay.getDate());
	}

	dateArray = dateArray.reverse();

	
	let isenkStat = new Chart(ctxIsenkStat, {
	    type: 'line',
	    data: {
	    	labels: dateArray,
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0)',
	            borderColor: 'rgb(255, 99, 132)',
	            data: isenkArray
	        }]
	    },
	    options: {
	    	title: {
	    		display: true,
        		text: 'Статистика посещения Теста Айзенка',
        		fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
        		color: '#000',
        		fontSize: 16
	    	},
	    	scales: {
	            yAxes: [{
	                ticks: {
	                    suggestedMin: 0,
	                    suggestedMax: 10,
	                    stepSize: 2
	                }
	            }]
	        },
	    	tooltips: {
	    		enabled: false
	    	},
	    	legend: {
	    		display: false
	    	}
		}
	});

	let gollandStat = new Chart(ctxGollandStat, {
	    type: 'line',
	    data: {
	    	labels: dateArray,
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0)',
	            borderColor: 'rgb(75, 192, 192)',
	            data: gollandArray
	        }]
	    },
	    options: {
	    	title: {
	    		display: true,
        		text: 'Статистика посещения Теста Голланда',
        		fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
        		color: '#000',
        		fontSize: 16
	    	},
	    	scales: {
	            yAxes: [{
	                ticks: {
	                    suggestedMin: 0,
	                    suggestedMax: 10,
	                    stepSize: 2
	                }
	            }]
	        },
	    	tooltips: {
	    		enabled: false
	    	},
	    	legend: {
	    		display: false
	    	}
		}
	});

	let ddoStat = new Chart(ctxDDOStat, {
	    type: 'line',
	    data: {
	    	labels: dateArray,
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0)',
	            borderColor: 'rgb(153, 102, 255)',
	            data: ddoArray
	        }]
	    },
	    options: {
	    	title: {
	    		display: true,
        		text: 'Статистика посещения Опросника Климова',
        		fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
        		color: '#000',
        		fontSize: 16
	    	},
	    	scales: {
	            yAxes: [{
	                ticks: {
	                    suggestedMin: 0,
	                    suggestedMax: 10,
	                    stepSize: 2
	                }
	            }]
	        },
	    	tooltips: {
	    		enabled: false
	    	},
	    	legend: {
	    		display: false
	    	}
		}
	});

	let socioStat = new Chart(ctxSocioStat, {
	    type: 'line',
	    data: {
	    	labels: dateArray,
	        datasets: [{
	            backgroundColor: 'rgba(67, 174, 232, 0)',
	            borderColor: 'rgb(54, 162, 235)',
	            data: socioArray
	        }]
	    },
	    options: {
	    	title: {
	    		display: true,
        		text: 'Статистика посещения Теста Соционика',
        		fontFamily: "'Roboto Slab', 'Times New Roman', 'serif'",
        		color: '#000',
        		fontSize: 16
	    	},
	    	scales: {
	            yAxes: [{
	                ticks: {
	                    suggestedMin: 0,
	                    suggestedMax: 10,
	                    stepSize: 2
	                }
	            }]
	        },
	    	tooltips: {
	    		enabled: false
	    	},
	    	legend: {
	    		display: false
	    	}
		}
	});
}