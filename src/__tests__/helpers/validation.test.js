const { validate } = require('../helpers/validation');

test('validates correctly for valid input', () => {
	expect(validate('validInput')).toBe(true);
});

test('validates correctly for invalid input', () => {
	expect(validate('')).toBe(false);
	expect(validate(null)).toBe(false);
	expect(validate(undefined)).toBe(false);
});