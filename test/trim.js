'use strict';

var clc = require('../');

module.exports = function (t, a) {
	a(t(clc.red('raz') + 'dwa' + clc.bold('trzy')), 'razdwatrzy', "Colors");
	a(t(clc.xterm(202)('raz') + clc.bgXterm(230)('dwa')), "razdwa", "xTerm");
	a(t(clc.move.to(1, 32) + 'raz' + clc.erase.line + 'dwa'), 'razdwa', "Move around");
};
