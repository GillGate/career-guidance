import $ from "jquery";
import getIsenkResult from './isenk.js';
import getGollandResult from './golland.js';
import getDDOResult from './ddo.js';
import getSocioResult from './socio.js';

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
	let $test = $('.test');

	$('.reveal__btn').on('click', function() {
		$(this).parent().fadeOut(300, function() {
			$test.fadeIn(300);
		});
	});

	$('.test__item:first').addClass('test__item--active');
	$('.test__item:last').addClass('test__item--last');

	$($test).on('click', '.test__button', function() {
		let $testItem = $(this).closest('.test__item');

		$testItem.removeClass('test__item--active');
		$testItem.next().addClass('test__item--active');

		if($testItem.hasClass('test__item--last')) {
			$test.fadeOut(500);
			getResult($test);
		}
	});

	$($test).on('dragstart', '.test__image img', function(e) {
		e.preventDefault();
	});
	$('.home').on('dragstart', '.home__image img', function(e) {
		e.preventDefault();
	});

	function getResult(test) {
		$('.reveal__result').fadeIn(500);

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
});