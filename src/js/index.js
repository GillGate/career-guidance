import $ from "jquery";
import LazyLoad from "vanilla-lazyload";
import getIsenkResult from './isenk.js';
import getGollandResult from './golland.js';
import getDDOResult from './ddo.js';
import getSocioResult from './socio.js';
import getIndexCharts from './charts.js';
import Calendar2 from './calendar.js';
import statInc from './statistic.js';

export function getValues(selector) {
	let values = $(selector);
	let arrayValues = [];

	for(let i = 0; i < values.length; i++) {
		arrayValues[i+1] = values[i].checked;
	}

	return arrayValues;
}

export function chartView(chartObj, $chartSelector) {
	let clWidth = document.documentElement.clientWidth;

	if(clWidth < 576) {
		chartObj.options.title.fontSize = 20;
		chartObj.options.scale.pointLabels.fontSize = 13;
	} else {
		chartObj.options.title.fontSize = 28;
		chartObj.options.scale.pointLabels.fontSize = 16;
	}

	if(clWidth < 450) {
		$($chartSelector).hide();
		$('.testResult__chart span').show().text('Разверните телефон горизонтально для отображения резултатов');
	} else {
		$($chartSelector).show();
		$('.testResult__chart span').hide();
	}
}

$(function() {
	let $test 	= $('.test'),
		$header = $('.header');

	$('.reveal__btn').on('click', function() {
		let clWidth = document.documentElement.clientWidth;

		$(this).parent().fadeOut(300, function() {
			$test.fadeIn(300);
		});

		if($test.hasClass('golland') || $test.hasClass('ddo')) {
			if(clWidth < 576) {
				$header.fadeOut(300);				
			}
		}
	});

	$('.test__item:first').addClass('test__item--active');
	$('.test__item:last').addClass('test__item--last');

	$($test).on('click', '.test__button', function() {
		let $testItem = $(this).closest('.test__item');

		window.setTimeout(function() {
			$testItem.removeClass('test__item--active');
			$testItem.next().addClass('test__item--active');

			if($testItem.hasClass('test__item--last')) {
				$test.slideUp(500);
			}
		}, 100);
	});

	$('#first-option').on('click', function() {
		getResult($test)
	})

	$('#second-option').on('click', function() {
		getResult($test)
	})

	function getResult(test) {
		$('.reveal__result').fadeIn(500);

		if (test.hasClass('isenk')) {
			getIsenkResult();
		}
		if (test.hasClass('golland')) {
			getGollandResult();
			$header.fadeIn(300);
		}
		if (test.hasClass('ddo')) {
			getDDOResult();
			$header.fadeIn(300);
		}
		if (test.hasClass('socio')) {
			getSocioResult();
		}
	}

	$($test).on('dragstart', '.test__image img', function(e) {
		e.preventDefault();
	});
	$('.home').on('dragstart', '.home__image img', function(e) {
		e.preventDefault();
	});

	let golddoLazy = new LazyLoad({
		elements_selector: ".golddo__image img, .testResult__image img"
	});

	let isHomePage = $('.home').hasClass('main__content');

	if(isHomePage) {
		statInc('statTotal');

		getIndexCharts();
		Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
		document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
	  		Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
		}

		document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
	 		Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
		}
	}

});