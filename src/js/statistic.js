import $ from "jquery";
import {getValues} from './index.js';


if(localStorage.getItem('init') == null) {
	localStorage.setItem('statTotal', 0);

	localStorage.setItem('statTestIsenk', 0);
	localStorage.setItem('statTestIsenkHol', 0);
	localStorage.setItem('statTestIsenkSan', 0);
	localStorage.setItem('statTestIsenkPhl', 0);
	localStorage.setItem('statTestIsenkMel', 0);

	localStorage.setItem('statTestGolland', 0);
	localStorage.setItem('statTestGollandReal', 0);
	localStorage.setItem('statTestGollandInt', 0);
	localStorage.setItem('statTestGollandSoc', 0);
	localStorage.setItem('statTestGollandCon', 0);
	localStorage.setItem('statTestGollandPredp', 0);
	localStorage.setItem('statTestGollandArt', 0);

	localStorage.setItem('statTestDDO', 0);
	localStorage.setItem('statTestDDOHumN', 0);
	localStorage.setItem('statTestDDOHumT', 0);
	localStorage.setItem('statTestDDOHumH', 0);
	localStorage.setItem('statTestDDOHumA', 0);
	localStorage.setItem('statTestDDOHumS', 0);

	localStorage.setItem('statTestSocio', 0);
	localStorage.setItem('statTestSocio--iiei', 0);
	localStorage.setItem('statTestSocio--iies', 0);
	localStorage.setItem('statTestSocio--iili', 0);
	localStorage.setItem('statTestSocio--iils', 0);
	localStorage.setItem('statTestSocio--irei', 0);
	localStorage.setItem('statTestSocio--ires', 0);
	localStorage.setItem('statTestSocio--irli', 0);
	localStorage.setItem('statTestSocio--erli', 0);

	localStorage.setItem('statTestSocio--eiei', 0);
	localStorage.setItem('statTestSocio--eies', 0);
	localStorage.setItem('statTestSocio--eili', 0);
	localStorage.setItem('statTestSocio--eils', 0);
	localStorage.setItem('statTestSocio--erei', 0);
	localStorage.setItem('statTestSocio--eres', 0);
	localStorage.setItem('statTestSocio--irls', 0);
	localStorage.setItem('statTestSocio--erls', 0);

	localStorage.setItem('init', 'true');
}

let keys = Object.keys(localStorage);
for (let key of keys) {
	if(key.includes('stat')) {
		$(`#${key}`).text(localStorage.getItem(key));
	}
}

export default function statInc(name) {
	let value = localStorage.getItem(name);
	value = (value * 1) + 1;
	localStorage.setItem(name, value);
}


$('.statistic').on('click', '.statistic__open', function() {
	let $statBlock = $(this).closest('.statistic__item').find('.statistic__data');

	$('.statistic__data').css('display', 'none');
	$statBlock.css('display', 'flex');
	$statBlock.fadeIn(450);
});

$('.statistic').on('click', '.statistic__close', function() {
	let $statBlock = $(this).closest('.statistic__item').find('.statistic__data');

	$statBlock.fadeOut(450);
});