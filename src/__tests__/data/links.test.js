const links = require('../../data/links');

test('should return correct link values', () => {
	expect(links.someLink).toBe('expectedValue');
	expect(links.anotherLink).toBe('anotherExpectedValue');
});