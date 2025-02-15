import { selectUser } from '../../user-selector';

describe('User Selector', () => {
    it('should return the correct user state', () => {
        const state = {
            user: {
                name: 'John Doe',
                email: 'john.doe@example.com',
            },
        };
        expect(selectUser(state)).toEqual(state.user);
    });
});