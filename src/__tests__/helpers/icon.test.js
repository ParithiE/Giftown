const { iconHelper } = require('../icon');

test('iconHelper should return correct icon for given type', () => {
	expect(iconHelper('success')).toBe('✔️');
	expect(iconHelper('error')).toBe('❌');
	expect(iconHelper('warning')).toBe('⚠️');
	expect(iconHelper('info')).toBe('ℹ️');
});