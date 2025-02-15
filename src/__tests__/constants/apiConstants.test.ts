import { API_CONSTANTS } from '../../constants/apiConstants';

test('API_CONSTANTS should have correct values', () => {
	expect(API_CONSTANTS.BASE_URL).toBe('https://api.example.com');
	expect(API_CONSTANTS.TIMEOUT).toBe(5000);
	expect(API_CONSTANTS.RETRY_COUNT).toBe(3);
});