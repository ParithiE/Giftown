const { render } = require('@testing-library/react');
const { renderForm } = require('../../helpers/renderForm');

test('renderForm should render the form correctly', () => {
	const { getByLabelText } = render(renderForm({ /* props */ }));
	expect(getByLabelText(/your label/i)).toBeInTheDocument();
});