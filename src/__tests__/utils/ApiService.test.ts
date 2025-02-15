const axios = require('axios');
const ApiService = require('../../utils/ApiService');

jest.mock('axios');

describe('ApiService', () => {
    it('should fetch data successfully', async () => {
        const data = { data: { message: 'success' } };
        axios.get.mockResolvedValue(data);

        const response = await ApiService.fetchData('url');
        expect(response).toEqual(data.data);
    });

    it('should handle error', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(new Error(errorMessage));

        await expect(ApiService.fetchData('url')).rejects.toThrow(errorMessage);
    });
});